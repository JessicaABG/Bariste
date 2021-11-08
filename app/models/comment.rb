class Comment < ApplicationRecord
  belongs_to :craft
  belongs_to :user
end
