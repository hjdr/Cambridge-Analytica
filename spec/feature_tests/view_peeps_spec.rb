feature 'sign up new user' do
  scenario 'user can see all peeps in reverse chronological order' do
    visit('/')
    click_button 'Sign Up'
    fill_in :username, with: 'timdog'
    fill_in :password, with: 'password'
    fill_in :first_name, with: 'Tim'
    fill_in :surname, with: 'Cole'
    fill_in :email, with: 'tim@timmail.com'
    click_button 'Sign Up'
    expect(page).to have_text "Welcome"
  end
end
