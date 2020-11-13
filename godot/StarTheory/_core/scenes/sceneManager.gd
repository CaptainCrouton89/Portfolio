extends Node

var _next_scn
var _cur_scene

var scene_paths = {}
# {"start": "pathtostartscene"}

# Called when the node enters the scene tree for the first time.
func _ready():
	pass



func switch_game_scenes(scene: String):
	if self.get_children():
		_cur_scene = self.get_children()[0]
		self.remove_child(_cur_scene)
		_cur_scene.call_deferred("free")
	
	var path = "res://_core/scenes/"+scene+"/"+scene+".tscn"
	_next_scn = load(path).instance()
	self.add_child(_next_scn)

func get_scene_paths(scene: String):
	# Retrieves the scene path if it's been stored already
	if scene_paths[scene]:
		return scene_paths[scene]
	else:
		#get_tree().edited_scene_root.filename ??
		pass
		
# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass
