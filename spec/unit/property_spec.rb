require './lib/model/property.rb'

p "ENVIRONMENT"
p ENV['ENVIRONMENT']
p ENV['RACK_ENV']
 
describe Property do 
    describe ".create" do 
        it "adds a new property to the database" do
            property = Property.create(name: "10 Downing Street")

            # expect(property).to be_a(Property)
            expect(property.name).to eq("10 Downing Street")
        end
    end
end