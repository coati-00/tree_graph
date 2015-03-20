/* Should questions be initiated with a first/empty species/scenario? Or should that be done in the view?
 * 
 * 
 * */

var App = { 
	Models: {}, 
	Collections: {}, 
	Views:{}//,
	//Contacts: null 
};


App.Models.Species = Backbone.Model.extend({});

App.Collections.SpeciesCollection = Backbone.Collection.extend({
	model: App.Models.Species,
});

/* maybe define predefined trees here so each scenario can have the list?
 * Or just keep in the on ready function and manually compare to the value
 * the user clicks on? */
//if (options && 'scenarioName' in options) {
//    this.scenarioName = options.scenarioName;
//}


App.Models.Scenario = Backbone.Model.extend({
	
    defaults: function() {
        return {
    	    /* Should I be using 'this' or is that done automatically because it is a default? */
    		scenarioName: 'Scenario Name',
    		numSpecies: 0,
    		speciesList: new App.Collections.SpeciesCollection(),
    	}
    }
    
});


App.Collections.ScenarioCollection = Backbone.Collection.extend({
	/* Not really sure if I will need this collection in the application */
	
	/* Will probably have to override create so that the number is auto incremented */
	
	model: App.Models.Scenario,
	
    defaults: function() {
  	  return {
  		numScenarios: 0
	  }
    }

});


App.Views.Species = Backbone.View.extend({
	/* I've been sticking template in the initialize method? Is this bad? */
	//$container: null,
	/* Browser complains about anything here... especially template */

	initialize: function(options){
		//_.bindAll(this, 'render', 'insert');
		//this.$container = options.$container;
		this.template = _.template(jQuery("#scenario-species-template").html());
		//this.listenTo(this.model, 'change', this.render);
		//this.insert(); // --what is insert for?
	},

	render: function () {
        /* another option for rendering a model (instead of next 2 lines just return it): */
        this.$el.html(this.template(this.model.attributes));
        //var html = this.template(this.model.toJSON());
        //this.$el.html(html);
        return this;
    },

    insert: function(){
		//this.$container.append(this.$el);
	}

});

App.Views.Scenario = Backbone.Views.extend({
	
	initialize: function(options){
		this.template = _.template(jQuery("#scenario-species-template").html());
	},
	
	render: function() { var $container = this.$('.listing').empty(); App.Contacts.each(function(contact) { new App.Views.Contact({ model: contact, $container: $container }).render(); });
	
});

//App.Views.SpeciesCollection = Backbone.Views.extend({});
//App.Views.ScenarioTable = Backbone.Views.extend({});







jQuery(function(){
	
	App.PredefinedSpecies = new App.Collections.SpeciesCollection();

	/* Add some predefined species */
	App.PredefinedSpecies.add([
	    new App.Models.Species({   
	        'id': "quercus_rubra",
	        'label' : 'Quercus rubra',
	        't0' : 10,
	        'k' :  283.15,
	        'r0' : 0.602,
	        'e0' : 43140
	    }),
	    new App.Models.Species({   
	        'id': "quercus_prinus",
	        'label' : 'Quercus prinus',
	        't0' : 10,
	        'k' :  283.15,
	        'r0' : 0.670,
	        'e0' : 37005
	    }),
	    new App.Models.Species({   
	        'id': "acer_rubrum",
	        'label' : 'Acer rubrum',
	        't0' : 10,
	        'k' :  283.15,
	        'r0' : 0.680,
	        'e0' : 27210
	   }),
	   new App.Models.Species({   
	        'id': "vaccinium_corymbosum",
	        'label' : 'Vaccinium corymbosum',
	        't0' : 10,
	        'k' :  283.15,
	        'r0' : 0.091,
	        'e0' : 62967
	   }),
	   new App.Models.Species({   
	        'id': "berberis_thumbergii",
	        'label' : 'Berberis thumbergii',
	        't0' : 10,
	        'k' :  283.15,
	        'r0' : 0.203,
	        'e0' : 81950
	   }),
	   new App.Models.Species({   
	        'id': "kalmia_latifolia",
	        'label' : 'Kalmia latifolia',
	        't0' : 10,
	        'k' :  283.15,
	        'r0' : 0.308,
	        'e0' : 54940
        }),
        new App.Models.Species({   
        	'id': "carya_glabra",
            'label' : 'Carya glabra',
            't0' : 10,
            'k' :  283.15,
            'r0' : 0.134,
            'e0' : 70547.5
        }),
        new App.Models.Species({   
        	'id': "liriodendron_tulipifera",
            'label' : 'Liriodendron tulipifera',
            't0' : 10,
            'k' :  283.15,
            'r0' : 0.187,
            'e0' : 60620.0
        }),
        new App.Models.Species({   
        	'id': "platanus_occidentalis",
            'label' : 'Platanus occidentalis',
            't0' : 10,
            'k' :  283.15,
            'r0' : 0.320,
            'e0' : 56336.7
        }),
        new App.Models.Species({   
        	'id': "betula_papyrifera",
            'label' : 'Betula papyrifera',
            't0' : 10,
            'k' :  283.15,
            'r0' : 0.357,
            'e0' : 45322.0
        }),
        new App.Models.Species({   
        	'id': "populus_tremuloides",
            'label' : 'Populus tremuloides',
            't0' : 10,
            'k' :  283.15,
            'r0' : 0.424,
            'e0' : 52261.3
        }),
        new App.Models.Species({   
        	'id': "populus_grandidentata",
            'label' : 'Populus grandidentata',
            't0' : 10,
            'k' :  283.15,
            'r0' : 0.294,
            'e0' : 59425.5
        }),
        new App.Models.Species({   
        	'id': "betula_lenta",
            'label' : 'Betula lenta',
            't0' : 10,
            'k' :  283.15,
            'r0' : 0.162,
            'e0' : 54267.7
        })
    ]);
	
	//console.log("App.PredefinedSpecies");
	//console.log(App.PredefinedSpecies);
	//App.Scenario = new App.Models.Scenario();
	//console.log("App.Scenario");
	//console.log(App.Scenario);

	//App.ScenarioCollection = new App.Collections.ScenarioCollection();
	
	
	
	App.TestSpecies = new App.Models.Species({   
        'id': "unique_id",
        'label' : 'Quercus rubra',
        't0' : 10,
        'k' :  283.15,
        'r0' : 0.602,
        'e0' : 43140
    });
	console.log("App.TestSpecies");
	console.log(App.TestSpecies);
	App.TestSpeciesView = new App.Views.Species({ model: App.TestSpecies, el: jQuery('#container-test')}).render();
	
	
	
	
	App.TestScenarioView = new App.Views.Scenario({ model: App.TestSpecies, el: jQuery('#container-test')}).render();
	
	
});
