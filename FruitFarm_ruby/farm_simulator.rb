require "awesome_print"
require_relative 'grove'
require_relative 'fruit_trees'
require_relative 'basket'
require_relative 'farmer'

def set_up_farm(farmer)
  farmer.buy_farm(Grove)
  farmer.plant(OrangeTree, 3)
  ap farmer.total_crop == 3
  farmer.plant(AppleTree, 2)
  ap farmer.total_crop == 5
  farmer.plant(PearTree, 7)
  ap farmer.total_crop == 12
end

def self.tend_farm(farmer, seasons)
  seasons.times { farmer.tend_crop }
  ap farmer.crop_type == [OrangeTree, AppleTree, PearTree]
end

def harvest_season(farmer)
  farmer.collect_harvest
  # harvest = farmer.harvest
  ap farmer.harvest_classes.length == farmer.total_crop
  farmer.harvest_variety
  # ap farmer.count_harvested_crop(Pear) == 7
end

def display_harvest(farmer, variety)
  variety.each do |fruit|
    # p fruit_types.count(fruit.class)
    if farmer.count_harvested_crop(fruit) != 1
      puts "You harvested #{farmer.count_harvested_crop(fruit).to_s + ' ' + fruit.name + 's'}."
    else
      puts "You harvested #{farmer.count_harvested_crop(fruit).to_s + ' ' + fruit.name }."
    end
  end
end

ben = Farmer.new
set_up_farm(ben)
tend_farm(ben, 10)
variety = harvest_season(ben)
display_harvest(ben,variety)
