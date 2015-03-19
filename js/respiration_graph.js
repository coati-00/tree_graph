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
	
	var ScenarioRowView = DeletableItemView.extend({
		initialize: function (options) {
			//_.bindAll(this, 'renderCollection', 'addItem', 'showPredefinedSpecies');
		    this.numSpecies = 0;
		    //this.predefinedSpeciesList = [];
		    this.predefinedSpecies = Backbone.Collection.extend({
		        "quercus_rubra" : {
		            'label' : 'Quercus rubra',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.602,
		            'e0' : 43140
		        },
		        "quercus_prinus" : {
		            'label' : 'Quercus prinus',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.670,
		            'e0' : 37005
		        },
		        "acer_rubrum" : {
		            'label' : 'Acer rubrum',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.680,
		            'e0' : 27210
		        },
		        "vaccinium_corymbosum" : {
		            'label' : 'Vaccinium corymbosum',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.091,
		            'e0' : 62967
		        },
		        "berberis_thumbergii" : {
		            'label' : 'Berberis thumbergii',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.203,
		            'e0' : 81950
		        },
		        "kalmia_latifolia" : {
		            'label' : 'Kalmia latifolia',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.308,
		            'e0' : 54940
		        },
		        "carya_glabra": {
		            'label' : 'Carya glabra',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.134,
		            'e0' : 70547.5
		        },
		        "liriodendron_tulipifera": {
		            'label' : 'Liriodendron tulipifera',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.187,
		            'e0' : 60620.0
		        },
		        "platanus_occidentalis": {
		            'label' : 'Platanus occidentalis',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.320,
		            'e0' : 56336.7
		        },
		        "betula_papyrifera": {
		            'label' : 'Betula papyrifera',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.357,
		            'e0' : 45322.0
		        },
		        "populus_tremuloides": {
		            'label' : 'Populus tremuloides',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.424,
		            'e0' : 52261.3
		        },
		        "populus_grandidentata": {
		            'label' : 'Populus grandidentata',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.294,
		            'e0' : 59425.5
		        },
		        "betula_lenta": {
		            'label' : 'Betula lenta',
		            't0' : 10,
		            'k' :  283.15,
		            'r0' : 0.162,
		            'e0' : 54267.7
		        }
		    });
		    this.tmp_species = {'species-name': '', 'species-base-temp': '', 'species-R0': '', 'species-E0': ''};
		    //this.tmp_species = clone(predefinedSpecies[])
		    this.species_list = new SpeciesCollection({ '1' : this.tmp_species});
		    this.template = _.template(jQuery('#scenario-template').html());
		    this.item_view = SpeciesRowView;
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
	   		//console.log("e.currentTarget.attributes.name");
	   		//console.log(e.currentTarget.attributes.name);
	   		console.log("e.currentTarget.attributes.id");
	   		console.log(e.currentTarget.attributes.id);
	   		console.log("e.currentTarget.attributes['id']");
	   		console.log(e.currentTarget.attributes['id']);
	   		console.log("e.currentTarget.attributes['id'].value");
	   		console.log(e.currentTarget.attributes['id'].value);
	   		console.log("e.currentTarget.attributes.get('id')");
	   		console.log(e.currentTarget.attributes['id']);
	   		var get_species = this.predefinedSpecies;
	   		console.log("get_species");
	   		console.log(get_species);
	   		var temp_species = jQuery.extend(true, {}, this.predefinedSpecies[e.currentTarget.attributes.id]);
	   		//var temp_species = clone(this.predefinedSpecies[e.currentTarget.attributes.id]);
	   		console.log(temp_species);
	   	    //this.tmp_species = {'species-name': '', 'species-base-temp': '', 'species-R0': '', 'species-E0': ''};
	   		//this.species_list.create();
	    	//var specHtml = this.$el.find(jQuery('.species-predefined-choice').attr('id'));
	    	//var specHtml = this.attr('name');
	    	//console.log(specHtml.selector);
	    	var specHtml = this.$el//attr('name');
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
	        //this.$el = $('#scenario-row-box');
	        this.collection.on('add', this.addItem);
	        this.item_view = ScenarioRowView;
	        //this.temp_scenario = {'name' : 'NameHere'}
	        //this.$el.append(jQuery('#scenario-template').html());
	        this.collection.add();//(this.temp_scenario);
	        //this.$el.find();
	        
	        console.log("Initialize ScenarioRowView");
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
		/* Slowly Moving Old Code Over - Starting with Species.js will probably eliminate a lot of it */
				
	   	initialize: function (options) {
	   		_.bindAll(this,
	                  'addScenario');
	   		this.options = options;
	   		this.numScenarios = 0;
	   		this.$el = $('#canopy-graph-pane');
	   	    /* For now tying to the entire canopy tab-pane */
	   	    //this.scenario_list_view = new ScenarioRowView();//);
	   		//this.scenario_container = $('#scenario-row-box');
	   		this.scenario_list_view = new ScenarioCollectionView({el: jQuery('#scenario-row-box')});
	   		this.temp_scenario = {'name' : 'NameHere'}
	   		this.scenario_list_view.collection.add(this.temp_scenario);
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
	
	
	
    $('#container').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    });
//});
  
    $('#container2').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Scenario Graph'
        },
        subtitle: {
            text: ''
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Seasonal Respiratory Carbon Release mol Cm-2'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    });
    
    
    
    
});
