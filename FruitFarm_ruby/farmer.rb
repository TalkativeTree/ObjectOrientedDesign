class Farmer
  attr_reader :harvest, :harvest_variety, :harvest_classes
  def initialize
    @basket = Basket.new
  end

  def buy_farm(klass)
    @farm = klass.new
  end

  def plant(klass, seeds)
    seeds.times {@farm.crop << klass.new}
  end

  def total_crop
    @farm.crop.count
  end

  def crop_type
    @farm.crop_type
  end

  def tend_crop
    @farm.tend
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
    # ap @farm.crop
    # p "And does crop work for a normal tree?"
    # p (AppleTree.new).crop
    # @basket.collect(@farm.crop)
    @farm.crop.each { |harvest| @basket.collect(harvest.fruit)  }
    @harvest = @basket.contents.flatten
    # p "MAH HARVEST"
    # ap harvest
    inventory_harvest_type
  end

  def inventory_harvest_type
    @harvest_variety = harvest.map{|crop| crop.class}.uniq
    @harvest_classes = harvest.map{|crop| crop.class}
  end

  def count_harvested_crop(klass)
    @harvest_classes.count(klass)
  end
end

