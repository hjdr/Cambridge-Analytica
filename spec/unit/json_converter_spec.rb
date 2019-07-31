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
            json = '{"user_name":"harry123","first_name":"Marvin","surname":"Riley","password":"brum","email":"harry@harry.harry"}'
            JsonConverter.add_to_DB(json)

            user = Users.find_by(first_name: "Marvin")
            expect(user.first_name).to eq("Marvin")

        end
    end

    describe '.delete_from_DB' do
        it('Delete from the Database') do
            json = '{"user_name":"bdraps","first_name":"Betty","surname":"Drapper","password":"nyc","email":"bdraps@mm.com"}'
            JsonConverter.add_to_DB(json)

            p user = Users.find_by(first_name: "Betty")
            p JsonConverter.delete_from_DB(user)
            expect(user.first_name).to eq(nil)

        end
    end
end
