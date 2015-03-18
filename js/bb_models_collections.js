	var Scenario = BaseModel.extend({
	    urlRoot: '/'
	});
	
	var Species = BaseModel.extend({
	    urlRoot: '/'
	});
	
	var ScenarioCollection = BaseCollection.extend({	
		model: Scenario,
	});
	
	var SpeciesCollection = BaseCollection.extend({
		model: Species,
	});