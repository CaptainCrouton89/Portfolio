extends TextureButton


func _ready():
	connect("button_down", self, "_on_TextureButton_button_down")

func _on_TextureButton_button_down():
	SceneManager.switch_game_scenes("combat")
