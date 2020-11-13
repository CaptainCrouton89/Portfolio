extends "res://_core/actors/shipItems/shipItem.gd"

var time_till_cooldown
var time_till_complete

var time_investment
var cooldown
var delay

var _prepared = true
var _in_use = false

func _ready():
	pass

func init(config):
	self.time_investment = config["time_investment"]
	print("investment: ", self.time_investment)
	self.cooldown = config["cooldown"]
	self.delay = config["delay"]
	.init(config)

func reset():
	self.time_till_cooldown = 0
	self._prepared = true
	self._in_use = false
	
func is_ready() -> bool:
	return self._prepared
	
func use(time) -> void:
	self.time_till_complete = time
	self._in_use = true
	
func is_in_use() -> bool:
	return _in_use
	
func tick_forward(delta):
	print("ticking")
	print(self.time_till_complete, self.time_till_cooldown)
	# If the weapon has been fired, reduce the cooldown left
	if self._prepared == false:
		self.time_till_cooldown -= delta
	# Once cooled down, set it to be ready once more
	if self.time_till_cooldown <= 0:
		self._prepared = true
	# If the weapon is being used by a crewmember, reduce the time 'till launch	
	if self._in_use:
		self.time_till_complete -= delta
	# Once the time elapses, the weapon fires, and the cooldown kicks in.
	if self.time_till_complete <= 0:
		self._in_use = false
		self.time_till_cooldown = self.cooldown
		self._prepared = false
	
func action_occurs(crew_member, target):
	print(
		crew_member.display_name, 
		" is performing the action ", 
		self.display_name, 
		" on ", target.name)
#
#func get_used(useTime):
#	self.countdown = useTime
#	self.ready = false
#
#func cancel_use():
#	pass
#
#func tick_forward(delta):
#	if self.countdown > 0:
#		self.countdown -= delta
#		if self.countdown <= 0:
#			self.ready = true
#			self.action_initiated()
#
#func action_initiated():
#	self.actions_queue.append(self.delay)
#	print(self.display_name, " action initiated")
#
#func action_occurs():
#	print(self.display_name, " doing its action")
