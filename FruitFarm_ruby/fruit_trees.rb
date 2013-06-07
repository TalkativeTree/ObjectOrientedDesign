require_relative 'fruit'

module TreeErrors
  def tree_alive_error
    raise "the tree is still alive, you'll have to chop it down to count it's rings"
  end
end

class Tree
  include TreeErrors
  STAGES = ["seed", "sapling", "teen", "mature"]
  attr_accessor :fruit, :status
  def initialize
    @rings  = 0
    @status = "healthy"
    @fruit  = []
  end

  def tree_grows
    @rings += 1
    @stage = STAGES[@rings] || "mature"
  end

  def check_age
    if tree.status = "dead"
      return @rings
    else
      tree_alive_error
    end
  end

  def age!
    fruit_spoils
    tree_grows
    if status == "healthy" && @stage == "mature"
      # p "I should be produc'n frust"
      @fruit.<<(self.fruit_class.new)
    else
    end
  end

  def fruit_spoils
    @fruit = [] if fruit[0]
  end
end

class AppleTree < Tree
  def fruit_class
    Apple
  end
end

class PearTree < Tree
  def fruit_class
    Pear
  end
end

class OrangeTree < Tree
  def fruit_class
    Orange
  end
end
