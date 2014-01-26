require_relative "credit_card"
require "minitest/autorun"
# require "minitest/unit"


VISA = ["4556-5338-0587-0185","4539969033588565","4539015457760791","4556754862380823","4539103225335847"]
MASTERCARD =["5244091241483068","5530670394253742","5597966320731375","5197591753637685","5374226418710909"]
DISCOVER =["6011-6801-5725-4429","6011591483644821","6011931140090374","6011514041473566","6011171887777590"]
CARDS = VISA + MASTERCARD + DISCOVER


class TestCreditCard < MiniTest::Test

  def setup
    @invalid_length = "1234"
    @invalid_format_letters = "111144445555nnnn"
    @invalid_format_numbers = "4222-2222-2222-2222"
  end

  def test_it_has_a_number
    CARDS.each{ |number| assert_equal number, CreditCard.new(number).number }
  end

  def test_card_creationg_with_valid_numbers
    CARDS.each{ |number| assert CreditCard.new(number).valid? }
  end

  def test_invalid_length
    assert CreditCard.new(@invalid_length).valid?
  end

  def test_invalid_format_with_letters
    assert CreditCard.new(@invalid_format_letters).valid?
  end

  def test_invalid_format_with_all_numbers
    assert CreditCard.new(@invalid_format_numbers).valid?
  end
end

class TestCardNumber < MiniTest::Test
  def setup
    @invalid_format_numbers = "4222-2222-2222-2222"
    @luhn_num = "4556-5338-0587-0185"
  end

  def test_creation
    assert CardNumber.new(@luhn_num)
  end

  def test_number
    assert_equal @luhn_num, CardNumber.new(@luhn_num).number
  end
end

describe "TestCardProcessor" do
  before do
    @invalid_length = "1234"
    @invalid_format_letters = "111144445555nnnn"
    @invalid_format_numbers = "4222-2222-2222-2222"
  end

  describe ".validate" do
    it "should return a number when given valid numbers" do
      CARDS.each do |number|
        CardProcessor.validate(number).number.must_equal number
      end
    end

    it "should return a CardNumber with errors when given invalid numbers" do
        # puts "@invalid_format_numbers #{@invalid_format_numbers}"
      assert CardProcessor.validate(@invalid_length).errors.any?
      assert CardProcessor.validate(@invalid_format_letters).errors.any?
      assert CardProcessor.validate(@invalid_format_numbers).errors.any?
    end
  end
end