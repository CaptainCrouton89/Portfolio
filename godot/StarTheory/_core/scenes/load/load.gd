extends "res://_core/scenes/baseScene.gd"


# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	print("loading resources")
	SceneManager.switch_game_scenes("load")
	# play music


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass
