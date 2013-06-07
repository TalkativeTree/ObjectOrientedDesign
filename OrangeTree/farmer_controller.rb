require_relative 'grove'
require_relative 'tree_and_fruit'
require_relative 'basket'

class Farmer
  def initialize
    @basket = Basket.new
  end

  def buy_farm(klass)
    @farm = klass.new
  end

  def plant(klass, seeds)
    seeds.times {@farm.crop << klass.new}
  end

  def count_crop
    @farm.crop.count
  end

  def tend_crop
    # p "tending mah crops"
    @farm.crop.each{|plant| plant.age!}
  end

  def unload
    @contents.shift(@contents.length)
  end

  def collect_harvest
  #   /Users/benjamin/Object Orient Lessons/basket.rb:12:in `collect': undefined method `<<' for nil:NilClass (NoMethodError)
  # from farmer_controller.rb:33:in `collect_harvest'
  # from farmer_controller.rb:47:in `<main>'
    # p "your farm"
    # p @farm
    # p "what you can do on your farm"
    # p @farm.methods
    # p "your farm's crop"
    # p @farm.crop.first
    # p "And does crop work for a normal tree?"
    # p (AppleTree.new).crop
    # @basket.collect(@farm.crop)
    @farm.crop.each { |harvest| @basket.collect(harvest)  }
  end
end


ben = Farmer.new
ben.buy_farm(Grove)
ben.plant(OrangeTree, 1)
p ben.count_crop == 1
ben.plant(AppleTree, 1)
p ben.count_crop == 2
ben.plant(PearTree, 1)
p ben.count_crop == 3
10.times { ben.tend_crop }
harvest = ben.collect_harvest
harvest.each{ |type| puts "You harvested #{type.fruit.length.to_s + ' ' + type.fruit.first.name}." }
