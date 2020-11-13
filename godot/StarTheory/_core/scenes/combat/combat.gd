extends CanvasLayer


# Declare member variables here. Examples:
# var a = 2
# var b = "text"

const _CombatAction = preload("res://_core/scenes/combat/combatAction.tscn")
const _Character = preload("res://_core/actors/characters/character.tscn")

onready var buttons = $GUI/modulesSelectionMenu/MarginContainer/VBoxContainer.get_children()

var hotbar_keys = ["F", "R", "V"]
var module_hotkeys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"]
var crew_hotkeys = ["I", "O", "P", "K", "L", ";", ",", ".", "/"]
var call_command_key = "Space"

var ally_characters = []
var enemy_characters = []

var current_target
var selected_module
var selected_crew
var current_hotbar = hotbar_keys[0]

var action_queue = []

func test_enemy():
	var enemy = _Character.instance()
	self.enemy_characters.append(enemy)
	self.add_child(enemy)

# Called when the node enters the scene tree for the first time.
func _ready():
	self.test_enemy()
	self.current_target = self.enemy_characters[0]
	for button in buttons:
		print(button.name)
	self.hotbar_keys = Player.module_hotbars.keys()

func _process(delta):
	for ally in ally_characters:
		ally.combat_manager.tick_forward(delta)
	for enemy in enemy_characters:
		enemy.combat_manager.tick_forward(delta)
	
	# Ticks forward all the orders being performed, and removes them once they
	# are carried out.
	for action_index in self.action_queue.size():
		self.action_queue[action_index].tick_forward(delta)
		if self.action_queue[action_index].completed:
			self.action_queue.remove[action_index]

		
func _input(event):
	if event is InputEventKey and event.pressed:
		var key = event.as_text()
		
		if key == self.call_command_key:
			self.call_command()
		if key in module_hotkeys:
			selected_module = Player.get_module_with_key(current_hotbar, key)
			print("module: ", selected_module)
		if key in crew_hotkeys:
			selected_crew = Player.get_crew_with_key(key)
			print("crew: ", selected_module)
		if key in hotbar_keys:
			self.current_hotbar = key
			
func call_command():
	print("calling command")
	if self.selected_module.is_ready():
		print("ready")
		if selected_crew.is_in_use():
			print("crew in use")
			if selected_module.is_in_use():
			# Pop-up menu to reassign them?
				print("module in use")
		else:			
			self.queue_action(self.selected_module, self.selected_crew, self.current_target)
	else:
		print("not ready yet")
			
func queue_action(module, crewMember, target):
	print("action queued")
	var combat_action = _CombatAction.instance()
	combat_action.init(module, crewMember, target)
	self.action_queue.append(combat_action)

func init_hotbar() -> void:
	# cycle through buttons and set image on each one to the proper module, 
	# update the name, and change the hotkey connection
	pass
