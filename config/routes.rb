Rails.application.routes.draw do
  
  
  namespace :api do
    resources :assignments
    resources :lectures
    resources :appointments
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"

    get "/auth/:provider/callback", to: "sessions#omniauth"

    get "/teachers", to: "users#teachers"
    get "/students", to: "users#students"

    resources :users do
      resources :assignments, shallow: true
      resources :lectures, shallow: true
      resources :appointments, shallow: true
    end

    resources :lectures do
      resources :assignments, shallow: true
      resources :users, shallow: true
    end


  end
  # all other routes will be load our React application
  # this route definition matches:
  # - *path: all paths not matched by one of the routes defined above
  # - constraints:
  #   - !req.xhr?: it's not a XHR (fetch) request
  #   - req.format.html?: it's a request for a HTML document
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
