class Fruit
  attr_reader :taste, :name
  attr_accessor :status

  def initialize
    @taste  = "delicious"
    @status = "uneaten"
    @name   = "fruit"
    post_initialize
  end

  def post_initialize
  end

  def rot
    @status = "spoiled"
  end
end

class Apple < Fruit
  attr_reader name
  def post_initialize
    @name = "apple"
  end
end

class Orange < Fruit
  attr_reader name
  def initialize
    super
    @name = "orange"
  end
end

class Pear < Fruit
  attr_reader name
  def post_initialize
    @name = "pear"
  end
end
