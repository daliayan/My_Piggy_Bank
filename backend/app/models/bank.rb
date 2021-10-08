class Bank < ApplicationRecord
    # has_many :funds
    validates :name, presence: true, uniqueness: true
end
