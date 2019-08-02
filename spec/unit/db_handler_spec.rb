require './app/models/db_handler.rb'


describe DatabaseHandler do

    describe '.add_to_DB' do
        it('Adds to the Database') do
            json = "{\"userName\":\"harry123\",\"first_name\":\"Marvin\",\"surname\":\"Riley\",\"password\":\"brum\",\"email\":\"harry@harry.harry\"}"
            DatabaseHandler.add_to_DB(json)
            user = Users.find_by(first_name: "Marvin")
            expect(user.first_name).to eq('Marvin')
        end
    end

    describe '.add_property_to_DB' do
        it('Adds to the Database') do
            json = '{"name":"buckingham palace","userID":1,"userName":"timdog","description":"a palace","price":"£2"}'
            DatabaseHandler.add_property_to_DB(json)
            property = Property.find_by(name: "buckingham palace")
            expect(property.name).to eq("buckingham palace")

        end
    end

    describe '.confirm_user_exists' do
      it 'compares username and password to database records' do
        json = '{"userName":"harry123","first_name":"Marvin","surname":"Riley","password":"brum","email":"harry@harry.harry"}'
        DatabaseHandler.add_to_DB(json)
        expect(DatabaseHandler.confirm_user_exists('{"userName":"harry123", "password":"brum"}')).to include "harry12"
      end

      it 'compares username and password to database records' do
        json = '{"userName":"harry123","first_name":"Marvin","surname":"Riley","password":"brum","email":"harry@harry.harry"}'
        DatabaseHandler.add_to_DB(json)
        expect(DatabaseHandler.confirm_user_exists('{"userName":"charlie123", "password":"brum"}')).to eq  'false'
      end

      it 'compares username and password to database records' do
        json = '{"userName":"harry123","first_name":"Marvin","surname":"Riley","password":"brum","email":"harry@harry.harry"}'
        DatabaseHandler.add_to_DB(json)
        expect(DatabaseHandler.confirm_user_exists('{"userName":"harry123", "password":"brummy"}')).to eq  nil
      end
    end

    describe('.search_db_for_prop_name') do
      it('fetches the property which matches the name provided') do
        json1 = '{"name":"buckingham palace","userID":1,"userName":"timdog","description":"a palace","price":"£2"}'
        json2 = '{"name":"Wiltshire palace","userID":1,"userName":"timdog","description":"a palace","price":"£2"}'
        DatabaseHandler.add_property_to_DB(json1)
        DatabaseHandler.add_property_to_DB(json2)
        expect(DatabaseHandler.search_db_for_prop_name('palace')).to include('Wiltshire palace')
      end
    end
end
