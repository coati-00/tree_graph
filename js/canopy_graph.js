jQuery(document).ready(function() {  

	var ScenarioView = DeletableItemView.extend({
		initialize: function (options) {
			_.bindAll(this, 'selectSpecies');
			if (options && 'course' in options) {
	            this.course = options.course;
	        }
		    this.numSpecies = 0;
		    this.speciesList = new SpeciesCollection();
		    this.template = _.template(jQuery('#scenario-template').html());
		    //console.log(this.$el);
		    //this.item_view = SpeciesRowView;
		    //this.species_container = this.$el.find(jQuery('.species-row-container'));
		    //this.listenTo(this.model, 'change', this.render);
		    //this.listenTo(this.model, 'destroy', this.removeItem);
		    console.log("Initialize ScenarioRowView");
		},
		
	   	events: {
	   	    'click .species-predefined-choice' : 'selectSpecies',
	   	},
	   	
	    selectSpecies: function(e)
	    {
	    	console.log("selectSpecies");
	    }

	});
	
	var CanopyScenarioGraphView = Backbone.View.extend({
				
	   	initialize: function (options) {
	   		_.bindAll(this,
	                  'addScenario');
	   		this.options = options;
	   		this.numScenarios = 1;
	   		
	   		this.scenarioCollection = new ScenarioCollection();
	   		
	   		/* May not need code under here */
	   		this.scenarioCollection.add([ 
	   		    new Scenario({'scenarioName' : 'Scenario Name', 'id': this.numScenarios })
	   		]);
	   		this.$el = jQuery('#canopy-graph-pane');
	   		
	   	    /* For now tying to the entire canopy tab-pane */
	   		this.scenario_table_el = jQuery('.scenario-table');
	   		this.scenario_body_el = jQuery('.scenario-table-body');
	   		
	   		this.scenario_template = _.template(jQuery('#scenario-template').html());
	   		this.temp_scenario = this.scenarioCollection.get(1);
	   		
	   		var first_scen = new ScenarioView({model: this.temp_scenario});
	   		this.scenario_body_el.append(first_scen.render().el);

	   		
	   		this.listenTo(this.scenarioCollection, 'add', this.addScenario);
	        //this.listenTo(this.scenarioCollection, 'reset', this.renderScenarios);
	        this.listenTo(this.scenarioCollection, 'all', this.render);
	   		
	   		//this.scenario_body_el(this.scenario_template(.toJSON()));
	   		
	   		
	   		console.log("Initializing Canopy Graph");
	   	},
	   	
	   	events: {
	   	    'click .addScenario' : 'addScenario',
	   	},

	    addScenario: function(scenario)
	    {   
	   		console.log("addScenario");
	   		var view = new ScenarioView({model: scenario});
	   		this.scenario_body_el.append(view.render().el);
	    },
	    
	    graphScenarios: function(e)
	    {   
	   		console.log("graphScenarios");
	   		
	    }
	    
   });
	var scen_model = new Scenario({'scenarioName' : 'Scenario Name', 'id': 3 });
	var scen_view = new ScenarioView({el: jQuery('#srow-test'), model: scen_model}).render();
	var canopy_graph_view = new CanopyScenarioGraphView({});

    
	
	
	
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
   
});
