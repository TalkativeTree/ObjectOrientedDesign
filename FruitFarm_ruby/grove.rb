class Grove
  attr_accessor :plants, :harvest_type
  def initialize
    @plants = []
  end

  def crop
    self.plants
  end

  def crop_type
    @harvest_type =  plants.map{|fruit| fruit.class}.uniq# == [Orange,Apple,Pear]
  end

  def tend
    plants.each{|plant| plant.age!}
  end
end
