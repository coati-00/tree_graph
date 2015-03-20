jQuery(document).ready(function() {  
	
	var SpeciesRowView = DeletableItemView.extend({
		initialize: function (options) {
		    this.template = _.template(jQuery("#scenario-species").html());
		    console.log("Initialize SpeciesRowView");
		},
		
	   	events: {
	   	    'click .deleteSpecies' : 'removeItem',
	   	    //'click .speciesName' : 'speciesName'
	   	},
	   	
	    hidePredefinedSpecies: function(e)
	    {   
	    	console.log("hidePredefinedSpecies");
	    },
	    
	    showPredefinedSpecies: function(e)
	    {
	    	console.log("showPredefinedSpecies");
	    }
	   	
	});
	
	
	var SpeciesCollectionView = BaseListView.extend({
		initialize: function (options) {
			_.bindAll(this, 'renderCollection', 'addItem');
		    this.collection = new SpeciesCollection(options);
	        this.collection.on('reset', this.renderCollection);
	        this.collection.on('add', this.addItem);
	        this.item_view = SpeciesRowView;
            console.log("Initialize ScenarioRowView");
		}//,
//		
//	   	events: {
//	   	    'click .deleteSpecies' : 'deleteSpecies',
//	   	},
//	   	
//	   	deleteScenario: function(e)
//	    {   
//	   		console.log("deleteSpecies");
//	   		
//	    }
	   	
	});
	
	
	var ScenarioRowView = DeletableItemView.extend({
		initialize: function (options) {
			//_.bindAll(this, 'renderCollection', 'addItem', 'showPredefinedSpecies');
		    this.numSpecies = 0;
		    this.speciesListView = new SpeciesCollectionView();
		    this.predefinedSpecies = new SpeciesCollection();
		    this.predefinedSpecies.add([
		        new Species({   
		        	'id': "quercus_rubra",
		            'label' : 'Quercus rubra',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.602,
		            'e0' : 43140
		        }),
		        new Species({   
		        	'id': "quercus_prinus",
		            'label' : 'Quercus prinus',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.670,
		            'e0' : 37005
		        }),
		        new Species({   
		        	'id': "acer_rubrum",
		            'label' : 'Acer rubrum',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.680,
		            'e0' : 27210
		        }),
		        new Species({   
		        	'id': "vaccinium_corymbosum",
		            'label' : 'Vaccinium corymbosum',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.091,
		            'e0' : 62967
		        }),
		        new Species({   
		        	'id': "berberis_thumbergii",
		            'label' : 'Berberis thumbergii',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.203,
		            'e0' : 81950
		        }),
		        new Species({   
		        	'id': "kalmia_latifolia",
		            'label' : 'Kalmia latifolia',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.308,
		            'e0' : 54940
		        }),
		        new Species({   
		        	'id': "carya_glabra",
		            'label' : 'Carya glabra',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.134,
		            'e0' : 70547.5
		        }),
		        new Species({   
		        	'id': "liriodendron_tulipifera",
		            'label' : 'Liriodendron tulipifera',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.187,
		            'e0' : 60620.0
		        }),
		        new Species({   
		        	'id': "platanus_occidentalis",
		            'label' : 'Platanus occidentalis',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.320,
		            'e0' : 56336.7
		        }),
		        new Species({   
		        	'id': "betula_papyrifera",
		            'label' : 'Betula papyrifera',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.357,
		            'e0' : 45322.0
		        }),
		        new Species({   
		        	'id': "populus_tremuloides",
		            'label' : 'Populus tremuloides',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.424,
		            'e0' : 52261.3
		        }),
		        new Species({   
		        	'id': "populus_grandidentata",
		            'label' : 'Populus grandidentata',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.294,
		            'e0' : 59425.5
		        }),
		        new Species({   
		        	'id': "betula_lenta",
		            'label' : 'Betula lenta',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.162,
		            'e0' : 54267.7
		        })
		    ]);
		    this.tmp_species = {'species-name': '', 'species-base-temp': '', 'species-R0': '', 'species-E0': ''};
		    this.template = _.template(jQuery('#scenario-template').html());
		    this.item_view = SpeciesRowView;
		    this.species_container = this.$el.find(jQuery('.species-row-container'));
		    console.log("Initialize ScenarioRowView");
		},
		
	   	events: {
	   	    'click .deleteScenario' : 'removeItem',
	   	    'click .species-predefined-choice' : 'selectSpecies',
	   	    'click .addSpecies' : 'showPredefinedSpecies'
	   	},
	   	
	    hidePredefinedSpecies: function(e)
	    {   
	    	console.log("hidePredefinedSpecies");
	    },
	    
	    showPredefinedSpecies: function(e)
	    {
	    	console.log("showPredefinedSpecies");
	    	this.$el.find(jQuery('.species-predefined-list')).show();
	    },
	    
	    selectSpecies: function(e)
	    {
	    	this.$el.find(jQuery('.species-predefined-list')).hide();
	   		var get_species = this.predefinedSpecies.get([e.currentTarget.attributes['id'].value]);
	   		var temp_species = get_species.clone();
	   		this.speciesListView.collection.add(temp_species);
	   		this.species_container.append(new SpeciesRowView(temp_species));
	   		//this.speciesListView.render();
	   		//this.speciesListView.render();
	   		//this.tmp_species = {'species-name': '', 'species-base-temp': '', 'species-R0': '', 'species-E0': ''};
	   		//this.species_list.create();
	    	//var specHtml = this.$el.find(jQuery('.species-predefined-choice').attr('id'));
	    	//var specHtml = this.attr('name');
	    	//console.log(specHtml.selector);
	    	//var specHtml = this.$el//attr('name');
	    	//console.log("this.$el");
	    	//console.log(specHtml);
	    	//console.log("this.$el.attributes");
	    	//console.log(this.$el.attributes);
	    	//console.log("this.model");
	    	//console.log(this.model);
	    }

	});
	
	var ScenarioCollectionView = BaseListView.extend({
		initialize: function (options) {
			_.bindAll(this, 'renderCollection', 'addItem');
		    this.collection = new ScenarioCollection(options);
	        this.collection.on('reset', this.renderCollection);
	        this.collection.on('add', this.addItem);
	        this.item_view = ScenarioRowView;
	        console.log("Initialize ScenarioCollectionView");
		},
		
	   	events: {
	   	    'click .deleteScenario' : 'deleteScenario',
	   	},
	   	
	   	deleteScenario: function(e)
	    {   
	   		console.log("deleteScenario");
	   		
	    }
	   	
	});
	
	var CanopyScenarioGraphView = Backbone.View.extend({
				
	   	initialize: function (options) {
	   		_.bindAll(this,
	                  'addScenario');
	   		this.options = options;
	   		this.numScenarios = 0;
	   		/* Attach the graph view to the pane its self so it has
	   		 * access to all possible DOM children - is management view
	   		 */
	   		this.$el = $('#canopy-graph-pane');
	   	    /* For now tying to the entire canopy tab-pane */
	   		this.scenario_list_view = new ScenarioCollectionView({el: jQuery('#scenario-row-box')});
	   		var temp_thing = new ScenarioRowView(new Scenario({'scenario-name': 'Initial Scenario'}));
	   		console.log("temp_thing");
	   		console.log(temp_thing);
	   		//this.scenario_list_view.append(temp_thing);
	   		//this.scenario_list_view.add();
	   		//this.temp_scenario = new Scenario();
	   		//{ 
	   		//	'scenario-name': "Initial Scenario"
	   		//}
	   		console.log("this.scenario_list_view.collection");
	   		console.log(this.scenario_list_view.collection);
	   		this.scenario_list_view.collection.add(new Scenario({'scenario-name': 'Initial Scenario'}));
	   		//console.log("this.temp_scenario");
	   		//console.log(this.temp_scenario);
//	   		this.temp_scenario = 	 new Species({   
//	   			'id': "quercus_rubra",
//	   			'label' : 'Quercus rubra',
//	            't0' : 10,
//	            'k' :  283.15,
//	            'r0' : 0.602,
//	            'e0' : 43140
//	   		}
	   		//this.scenario_list_view.collection.add(this.temp_scenario);
	   	    //console.log("Initialize CanopyScenarioGraphView");
	   	    //console.log("this.$el");
	   	    //console.log(this.$el);
	   	    //console.log("this.scenario_list_view");
	   	    //console.log(this.scenario_list_view);
	   	    //console.log("this.$el");
	   	},
	   	
	   	events: {
	   	    'click .addScenario' : 'addScenario',
	   	    //'click .graphScenarios' : 'graphScenarios',
	   	},

	    addScenario: function(e)
	    {   
	   		console.log("addScenario");
	   		//console.log("e");
	   		//console.log(e);
	   		//console.log("this.$el");
	   		//console.log("this.$el");
	   		//this.scenario_list_view.collection();
	   		//this.scenario_list_view.append(ScenarioRowView().render());
//	   		this.scenario_list_view.on('add', this.addItem);
//	   		this.course_list_view.collection.create(
//	   	    {
//	   	    	name: jQuery("#id_course_name").val(),
//	   	    	startingBudget: jQuery("#id_course_startingBudget").val(),
//	   	    	message: jQuery("#id_course_message").val(),
//	   	    	professor: professor
//	   	    });
	   		
	    },
	    
	    graphScenarios: function(e)
	    {   
	   		console.log("graphScenarios");
	   		
	    }
	    
   });

	var canopy_graph_view = new CanopyScenarioGraphView({
        //el: jQuery('.course-students'),
        //course: course
    });

    
});
