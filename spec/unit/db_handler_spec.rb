require './app/models/db_handler.rb'


describe DatabaseHandler do

    describe '.add_to_DB' do
        it('Adds to the Database') do
            json = '{"userName":"harry123","first_name":"Marvin","surname":"Riley","password":"brum","email":"harry@harry.harry"}'
            DatabaseHandler.add_to_DB(json)
            user = Users.find_by(first_name: "Marvin")

            expect(user.first_name).to eq("Marvin")

        end
    end

    describe '.confirm_user_exists' do
      it 'compares username and password to database records' do
        json = '{"userName":"harry123","first_name":"Marvin","surname":"Riley","password":"brum","email":"harry@harry.harry"}'
        DatabaseHandler.add_to_DB(json)
        expect(DatabaseHandler.confirm_user_exists('{"userName":"harry123", "password":"brum"}')).to eq  true


      end
        it 'compares username and password to database records' do
          json = '{"userName":"harry123","first_name":"Marvin","surname":"Riley","password":"brum","email":"harry@harry.harry"}'
          DatabaseHandler.add_to_DB(json)
          expect(DatabaseHandler.confirm_user_exists('{"userName":"charlie123", "password":"brum"}')).to eq  false
        end

        it 'compares username and password to database records' do
          json = '{"userName":"harry123","first_name":"Marvin","surname":"Riley","password":"brum","email":"harry@harry.harry"}'
          DatabaseHandler.add_to_DB(json)
          expect(DatabaseHandler.confirm_user_exists('{"userName":"harry123", "password":"brummy"}')).to eq  false
        end

    end

    # describe
# ('{"userName":"harry123", "password":"brum"}')

    # describe '.delete_from_DB' do
    #     it('Delete from the Database') do
    #         json = '{"user_name":"bdraps","first_name":"Betty","surname":"Drapper","password":"nyc","email":"bdraps@mm.com"}'
    #         JsonConverter.add_to_DB(json)

    #         p user = Users.find_by(first_name: "Betty")
    #         p JsonConverter.delete_from_DB(user)
    #         expect(user.first_name).to eq(nil)

    #     end
    # end
end
