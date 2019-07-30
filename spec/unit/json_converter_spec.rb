require './app/models/json_converter.rb'


describe JsonConverter do
    describe '.convert_from_json' do
        it("Converts JSON to a hash format") do
            json = '{"userName":"harry123","first_name":"Marvin","surname":"Riley","password":"brum","email":"harry@harry.harry"}'
            expect(JsonConverter.convert_from_json(json)).to be_a_kind_of(Hash)
        end
    end

    describe '.add_to_DB' do
        it('Adds to the Database') do
            json = '{"userName":"harry123","first_name":"Marvin","surname":"Riley","password":"brum","email":"harry@harry.harry"}'
            JsonConverter.add_to_DB(json)

            user = Users.find_by first_name: "Marvin"
            expect(user.first_name).to eq("Marvin")

        end
    end
end
