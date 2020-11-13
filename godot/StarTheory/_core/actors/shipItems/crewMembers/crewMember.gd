extends "res://_core/actors/shipItems/shipItem.gd"

var time_till_complete
var _in_use = false

var speed
var potency

func _ready():
	pass

func init(config):
	.init(config)
	self.speed = config["speed"]
	self.potency = config["potency"]

func tick_forward(delta):
	# If the weapon is being used by a crewmember, reduce the time 'till launch	
	if self._in_use:
		self.time_till_complete -= delta
	# Once the time elapses, the weapon fires, and the cooldown kicks in.
	if self.time_till_complete <= 0:
		self._in_use = false

func get_used(useTime):
	self.countdown = useTime
	self._prepared = false

func use(time) -> void:
	self.time_till_complete = time
	self._in_use = true

func is_in_use() -> bool:
	return _in_use
