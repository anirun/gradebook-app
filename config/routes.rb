Rails.application.routes.draw do
    
  namespace :api do
    resources :assignments
    resources :lectures
    resources :appointments
    
    post "/signup", to: "users#create"
    get "/me", to: "users#show"
    
    post "/login", to: "sessions#create"
    delete "/logout", to: "sessions#destroy"
    post "/auth/:provider/callback", to: "sessions#omniauth"

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

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
