def db_configuration
    db_configuration_file = File.join(File.expand_path('..', __FILE__), 'config.yml')
    YAML.load(File.read(db_configuration_file))
end