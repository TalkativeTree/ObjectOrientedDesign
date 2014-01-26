class CardNumber < Struct.new(:number, :errors)
end


module CardProcessor
  module_function
  attr_accessor :errors
  def validate(number)
    CardNumber.new(number, find_errors(number))
  end

  def errors
    @errors ||= []
  end

  def find_errors(card_num)
    right_size?(card_num) && right_format?(card_num) && passes_luhn_algorithm?(card_num)
    errors
  end

  def right_size?(card_number)
    errors << "Incorrect number of digits." if card_number.gsub(/-/,'').length != 16
  end

  def right_format?(card_number)
    errors << "Invalid format." if card_number.gsub(/-/, '').match(/\D/)
  end

  def passes_luhn_algorithm?(card_number)
    numbers_between = card_number.gsub(/-/, '').split('').map{|num| num.to_i}
    digit_check = multiply_by_9 the_sum_of_all individual_digits_products_sum after_doubling_all_even numbers_between[0..14]
    errors << "Invalid number." if card_number[-1] == digit_check.to_s[-1]
  end

  def after_doubling_all_even(numbers)
    numbers.each_with_index.map{|num, index| index.even? ? num * 2 : num}
  end

  def individual_digits_products_sum(numbers)
    numbers.map do |num|
      num.to_s.split('').inject(0){|n, sum| sum.to_i + n.to_i}
    end
  end

  def the_sum_of_all(nums)
    nums.inject(&:+)
  end

  def multiply_by_9(num)
    num * 9
  end
end

class CreditCard
  include CardProcessor
  attr_reader :number, :errors

  def initialize(number)
    processed = CardProcessor.validate(number)
    @number = processed.number
    @errors = processed.errors
  end

  def valid?
    @errors.any?
  end
end