const userDefinedAuthorizedTags = {
	"type:application": {
		"description": "applying dynamic graph visualization to a specific application scenario"
	},
	"type:evaluation": {
		"description": "empirical, algorithmic, or theoretical evaluation of visualization approaches"
	},
	"type:technique": {
		"description": "novel visualization technique or system"
	},
	"time:animation": {
		"description": "mapping time to time in an animation"
	},
	"time:timeline": {
		"description": "mapping time to space onto a timeline"
	},
	"time:generic": {
		"description": "being applicable to all representations of time"
	},
	"paradigm:list": {
		"description": "representing the graph as a visual adjacency list"
	},
	"paradigm:node-link": {
		"description": "representing the graph as nodes connected by links"
	},
	"paradigm:matrix": {
		"description": "representing the graph as a visual adjacency matrix"
	},
	"paradigm:generic": {
		"description": "being applicable to all graph representations"
	},
	"evaluation:algorithmic": {
		"description": "testing the presented approach algorithmically or using metrics"
	},
	"evaluation:case_study": {
		"description": "discussing a small number of application examples"
	},
	"evaluation:expert": {
		"description": "assessing the approach through external domain or visualization experts"
	},
	"evaluation:none": {
		"description": "no specific evaluation provided"
	},
	"evaluation:survey": {
		"description": "specially broad survey of related work"
	},
	"evaluation:theoretical": {
		"description": "theoretical considerations such as proof or runtime complexity"
	},
	"evaluation:user_study": {
		"description": "conducting a study involving other users"
	},
	"application:biology": {
		"description": "bioinformatics data such as protein interactions or metabolic pathways"
	},
	"application:business": {
		"description": "business- or economy-related data such as financial transactions, stock market, business processes"
	},
	"application:document": {
		"description": "document collections, bibliometrics, and information retrieved from texts"
	},
	"application:eye_tracking": {
		"description": "data recorded during eye-tracking experiments"
	},
	"application:geo": {
		"description": "geographic data with spatial context"
	},
	"application:infrastructure": {
		"description": "infrastructure networks such as computer, communication, power, or road networks"
	},
	"application:media": {
		"description": "data related to movies, TV, music, news and the like"
	},
	"application:social": {
		"description": "social networks, social media, and other data from social life"
	},
	"application:software_engineering": {
		"description": "information related to software such as components, source code, developers, documentation, etc."
	},
	"application:sports": {
		"description": "sports-related data such as performance data or results"
	},
	"application:generic": {
		"description": "no specific application proposed"
	},

	"3d": {
		"description": "using a 3D-based graph visualization"
	},
	"acyclic_graph": {
		"description": "directed graph that has no cyclic paths"
	},
	"aesthetic_criteria": {
		"description": "discussing aesthetics or aesthetic criteria of the visualization"
	},
	"animated_timeline": {
		"description": "hybrid approach where the graphs on the timeline or the timeline itself is animated"
	},
	"bipartite": {
		"description": "graph consisting of two sets of vertices, edges only connecting vertices from different sets"
	},
	"clustering": {
		"description": "clustering applied as central part of the approach"
	},
	"compound_graph": {
		"description": "graph with an additional hierarchical structure on the vertices"
	},
	"directed_graph": {
		"description": "graph with edges interpreted as directed"
	},
	"edge_bundling": {
		"description": "arranging similar edges into bundles"
	},
	"ego_network": {
		"description": "graph that only represents the neighborhood of a certain vertex (ego)"
	},
	"evaluation_framework": {
		"description": "framework for the systematic evaluation of approaches"
	},
	"fixed_nodes": {
		"description": "using the same node positions throughout the dynamic graph"
	},
	"force-directed_layout": {
		"description": "employing a layout algorithms based on the simulation of physical forces"
	},
	"general-purpose_layout": {
		"description": "node-link layouts that do not apply only for a specific subtype of dynamic graph"
	},
	"gestalt_laws": {
		"description": "applying specific laws from Gestalt theory"
	},
	"graph_difference": {
		"description": "visualizing the difference of subsequent graphs"
	},
	"hierarchical_layout": {
		"description": "applying a hierarchical node-link layout to the graph"
	},
	"integrated_node-link": {
		"description": "inherently integrating a timeline into a node-link diagram"
	},
	"intra-cell_timelines": {
		"description": "matrix visualizations with timelines within the cells"
	},
	"juxtaposed_node-link": {
		"description": "juxtaposed node-link diagrams on a timeline"
	},
	"layered_matrices": {
		"description": "layered or juxtaposed matrix(-like) representations on a timeline"
	},
	"linear_arrangement": {
		"description": "arranging and optimizing vertices on a linear axis"
	},
	"map_metaphor": {
		"description": "using a map-like representation to lay out the graph"
	},
	"mental_map": {
		"description": "preservation of the mental image that is formed in the mind of the user"
	},
	"multivariate_graph": {
		"description": "graph with multiple types of edges or multi-dimensional edge weights"
	},
	"network_metrics": {
		"description": "appraoch based on computing (social) network metrics"
	},
	"offline_problem": {
		"description": "animating a sequence of node-link diagrams under consideration of the complete sequence"
	},
	"omitted_links": {
		"description": "do not draw or only partially draw links in order to reduce edge clutter"
	},
	"online_problem": {
		"description": "animating a sequence of node-link diagrams under consideration of only past states"
	},
	"orthogonal_layout": {
		"description": "drawing edges of a node-link diagram only using horizontal and vertical lines"
	},
	"planar_graph": {
		"description": "graphs that can be drawn in 2D without edge crossings"
	},
	"program_execution": {
		"description": "data on the execution of a program such as call graphs"
	},
	"radial": {
		"description": "using a radial coordinate system"
	},
	"social_media": {
		"description": "data from social media services and communication"
	},
	"software_evolution": {
		"description": "analyzing the evolution or development process of software systems"
	},
	"sparklines": {
		"description": "using word-sized visualizations called sparklines of representing time series"
	},
	"special-purpose_layout": {
		"description": "node-link layouts for a specific subtype of dynamic graph"
	},
	"superimposed_node-link": {
		"description": "node link diagrams stacked (superimposed) on top of each other in 2D or 3D"
	},
	"tasks": {
		"description": "specifically discussing tasks for dynamic graph visualizations"
	},
	"taxonomy": {
		"description": "systematically structuring an aspect of dynamic graph visualization through a taxonomy"
	},
	"time_aggregation": {
		"description": "different forms of aggregating time steps or interactive aggregation"
	},
	"transition_problem": {
		"description": "focusing on the transition phase between two time steps in animated diagrams"
	},
	"weighted_graph": {
		"description": "graphs with edges having a numeric weight"
	}
}