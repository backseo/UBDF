activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

activate :sprockets

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

 configure :build do
   activate :minify_css
   activate :minify_javascript
   activate :asset_hash
   activate :relative_assets
   set :relative_links, true
 end

 activate :deploy do |deploy|
  deploy.deploy_method = :git
  deploy.remote = 'https://github.com/backseo/UBDF.git'
  deploy.branch = 'main'
  deploy.build_before = true
  end
