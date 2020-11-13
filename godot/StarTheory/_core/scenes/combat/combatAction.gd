extends Node


var time_investment
var delay

var module
var crew_member
var target
var completed = false

var time
var time_till_launch
var time_till_effect

func _ready():
	pass

func init(module, crewMember, target):
	self.module = module
	self.crew_member = crewMember
		
	self.target = target
	self.time = 0
	self.time_till_launch = self.module.time_investment * self.crew_member.speed
	self.time_till_effect = self.time_till_launch + self.module.delay
	
	self.module.use(self.time_till_launch) # Will tick down until usable again
	self.crew_member.use(self.time_till_launch) 
	
func tick_forward(delta):
	self.time += delta

	# keep track of event up until the event occurs (post delay), and let the 
	# module itself keep track of its cooldown. 

	if self.time >= self.time_till_effect:
		self.module.action_occurs(self.crew_member, self.target)
		self.completed = true
		
	
