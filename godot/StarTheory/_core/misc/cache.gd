extends Node

var cache = {}

func _ready():
	self.load_data()
	#print(cache)
	
func load_data() -> void:
	var weapons_dicts = load_jsons("res://data/modules/weapons/")
	add_to_cache("weapons", weapons_dicts)
	var cargo_dicts = load_jsons("res://data/modules/cargo/")
	add_to_cache("cargo", cargo_dicts)
	
	#load_jsons("res://data/modules//")
	#load_jsons("res://data/modules/weapons/")
	
	var ship_dicts = load_jsons("res://data/ships/")
	add_to_cache("ships", ship_dicts)
	
func add_to_cache(type : String, dictList : Array) -> void:
	self.cache[type] = dictList
#	if not self.cache[type]:
#		self.cache[type] = {}
#	for item in dictList:
#		self.cache[type][item[name]] = item

func load_jsons(dirPath : String) -> Array:
	var contents = []
	var files = get_dir_contents(dirPath)
	for file in files:
		var f = File.new()
		f.open(file, File.READ)
		var result = JSON.parse(f.get_as_text()).result
		contents.append(result)
		f.close()
	return contents
	

func get_dir_contents(path : String) -> Array:
	var contents = []
	var dir = Directory.new()
	if dir.open(path) == OK:
		dir.list_dir_begin(true, true)
		var file_name = dir.get_next()
		while file_name != "":
			print("Loading file: " + path + file_name)
			contents.append(path + file_name)
			file_name = dir.get_next()
	else:
		print("An error occurred when trying to access the path.")
	return contents
	
func get_dict_with_name(name : String, type : String) -> Dictionary:
	for item in self.cache[type]:
		if item["name"] == name:
			return item
	print("Item not found")
	return {}
