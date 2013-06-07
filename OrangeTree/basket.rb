class Basket
  attr_reader :contents
  def initialize
    @contents = []
  end

  def collect(object)
    @contents << object
  end
end
