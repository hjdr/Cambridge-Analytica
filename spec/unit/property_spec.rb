require './spec/spec_helper.rb'
require './lib/model/property.rb'
p ENV['ENVIRONMENT']
 
describe Property do 
    describe ".create" do 
        it "adds a new property to the database" do
            property = Property.create(name: "10 Downing Street")

            # expect(property).to be_a(Property)
            expect(property.name).to eq("10 Downing Street")
        end
    end
end