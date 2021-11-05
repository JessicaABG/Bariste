# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Comment.destroy_all
Craft.destroy_all
User.destroy_all




@admin= User.create!(username: 'myName321', email: 'jabg324@gmail.com', password:'123456')
@admin= User.create!(username: 'myName331', email: 'j_a_g@aol.com', password:'123457')
puts"#{User.count} users created"

@bev= Craft.create!(user: @admin, img_url: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1024-512,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg', about: 'this latte art has a hint of vanilla, brewed at 170f and aerated for 12 seconds.' )
@bev= Craft.create!(user: @admin, img_url: 'https://www.seriouseats.com/thmb/w8XhHmJLwJnw5CLK3IUbLENk5Iw=/500x375/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__assets_c__2010__12__20101212-128376-Fresh-homebrew-thumb-500x375-127967-1e602da7af2442e595836aa911f46afa.jpg', about: 'this brew was made from organic home grown hops and has a nice earthy tone.' )
puts"#{Craft.count} crafts created"


Comment.create!(user: @admin, craft: @bev, comment:'wow this latte is the perfect way to greet the morning.' )
Comment.create!(user: @admin, craft: @bev, comment:' Tonight! Weve got nothing better to do
    Than watch TV and have a couple of home-made brews' )
puts"#{Comment.count} comments created"