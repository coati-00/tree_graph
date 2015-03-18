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
		    this.speciesList = [];
		    this.tmp_species = {'species-name': '', 'species-base-temp': '', 'species-R0': '', 'species-E0': ''};
		    this.species_list = new SpeciesCollection({ '1' : this.tmp_species});
		    this.template = _.template(jQuery('#scenario-template').html());
		    this.item_view = SpeciesRowView;
		    //this.tmp_species = {'species-name': '', 'species-base-temp': '', 'species-R0': '', 'species-E0': ''};
//		    if (options && 'species-name' in options) {
//		    	this.tmp_species.species-name = options.species-name;
//	        }
//		    if (options && 'species-base-temp' in options) {
//		    	this.tmp_species.species-base-temp = options.course;
//	        }
//		    if (options && 'species-R0' in options) {
//		    	this.tmp_species.species-R0 = options.course;
//	        }
//		    if (options && 'species-E0' in options) {
//		    	this.tmp_species.species-E0 = options.course;
//	        }
		    //this.species_list.add(this.tmp_species);
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
	    	console.log("selectSpecies");
	    	//var specHtml = this.$el.find(jQuery('.species-predefined-choice').attr('id'));
	    	//var specHtml = this.attr('name');
	    	//console.log(specHtml.selector);
	    	var specHtml = this.attr('name'));
	    	console.log(specHtml);
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
	   	    console.log("Initialize CanopyScenarioGraphView");
	   	    console.log("this.$el");
	   	    console.log(this.$el);
	   	    console.log("this.scenario_list_view");
	   	    console.log(this.scenario_list_view);
	   	    //console.log("this.$el");
	   	},
	   	
	   	events: {
	   	    'click .addScenario' : 'addScenario',
	   	    //'click .graphScenarios' : 'graphScenarios',
	   	},

	    addScenario: function(e)
	    {   
	   		console.log("addScenario");
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