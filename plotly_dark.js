template = {
  data: {
    barpolar: [
      {
        marker: {
          line: {
            color: "rgb(17,17,17)",
            width: 0.5,
          },
          pattern: {
            fillmode: "overlay",
            size: 10,
            solidity: 0.2,
          },
        },
        type: "barpolar",
      },
    ],
    bar: [
      {
        error_x: {
          color: "#f2f5fa",
        },
        error_y: {
          color: "#f2f5fa",
        },
        marker: {
          line: {
            color: "rgb(17,17,17)",
            width: 0.5,
          },
          pattern: {
            fillmode: "overlay",
            size: 10,
            solidity: 0.2,
          },
        },
        type: "bar",
      },
    ],
    carpet: [
      {
        aaxis: {
          endlinecolor: "#A2B1C6",
          gridcolor: "#506784",
          linecolor: "#506784",
          minorgridcolor: "#506784",
          startlinecolor: "#A2B1C6",
        },
        baxis: {
          endlinecolor: "#A2B1C6",
          gridcolor: "#506784",
          linecolor: "#506784",
          minorgridcolor: "#506784",
          startlinecolor: "#A2B1C6",
        },
        type: "carpet",
      },
    ],
    choropleth: [
      {
        colorbar: {
          outlinewidth: 0,
          ticks: "",
        },
        type: "choropleth",
      },
    ],
    contourcarpet: [
      {
        colorbar: {
          outlinewidth: 0,
          ticks: "",
        },
        type: "contourcarpet",
      },
    ],
    contour: [
      {
        colorbar: {
          outlinewidth: 0,
          ticks: "",
        },
        colorscale: [
          [0.0, "#0d0887"],
          [0.1111111111111111, "#46039f"],
          [0.2222222222222222, "#7201a8"],
          [0.3333333333333333, "#9c179e"],
          [0.4444444444444444, "#bd3786"],
          [0.5555555555555556, "#d8576b"],
          [0.6666666666666666, "#ed7953"],
          [0.7777777777777778, "#fb9f3a"],
          [0.8888888888888888, "#fdca26"],
          [1.0, "#f0f921"],
        ],
        type: "contour",
      },
    ],
    heatmapgl: [
      {
        colorbar: {
          outlinewidth: 0,
          ticks: "",
        },
        colorscale: [
          [0.0, "#0d0887"],
          [0.1111111111111111, "#46039f"],
          [0.2222222222222222, "#7201a8"],
          [0.3333333333333333, "#9c179e"],
          [0.4444444444444444, "#bd3786"],
          [0.5555555555555556, "#d8576b"],
          [0.6666666666666666, "#ed7953"],
          [0.7777777777777778, "#fb9f3a"],
          [0.8888888888888888, "#fdca26"],
          [1.0, "#f0f921"],
        ],
        type: "heatmapgl",
      },
    ],
    heatmap: [
      {
        colorbar: {
          outlinewidth: 0,
          ticks: "",
        },
        colorscale: [
          [0.0, "#0d0887"],
          [0.1111111111111111, "#46039f"],
          [0.2222222222222222, "#7201a8"],
          [0.3333333333333333, "#9c179e"],
          [0.4444444444444444, "#bd3786"],
          [0.5555555555555556, "#d8576b"],
          [0.6666666666666666, "#ed7953"],
          [0.7777777777777778, "#fb9f3a"],
          [0.8888888888888888, "#fdca26"],
          [1.0, "#f0f921"],
        ],
        type: "heatmap",
      },
    ],
    histogram2dcontour: [
      {
        colorbar: {
          outlinewidth: 0,
          ticks: "",
        },
        colorscale: [
          [0.0, "#0d0887"],
          [0.1111111111111111, "#46039f"],
          [0.2222222222222222, "#7201a8"],
          [0.3333333333333333, "#9c179e"],
          [0.4444444444444444, "#bd3786"],
          [0.5555555555555556, "#d8576b"],
          [0.6666666666666666, "#ed7953"],
          [0.7777777777777778, "#fb9f3a"],
          [0.8888888888888888, "#fdca26"],
          [1.0, "#f0f921"],
        ],
        type: "histogram2dcontour",
      },
    ],
    histogram2d: [
      {
        colorbar: {
          outlinewidth: 0,
          ticks: "",
        },
        colorscale: [
          [0.0, "#0d0887"],
          [0.1111111111111111, "#46039f"],
          [0.2222222222222222, "#7201a8"],
          [0.3333333333333333, "#9c179e"],
          [0.4444444444444444, "#bd3786"],
          [0.5555555555555556, "#d8576b"],
          [0.6666666666666666, "#ed7953"],
          [0.7777777777777778, "#fb9f3a"],
          [0.8888888888888888, "#fdca26"],
          [1.0, "#f0f921"],
        ],
        type: "histogram2d",
      },
    ],
    histogram: [
      {
        marker: {
          pattern: {
            fillmode: "overlay",
            size: 10,
            solidity: 0.2,
          },
        },
        type: "histogram",
      },
    ],
    mesh3d: [
      {
        colorbar: {
          outlinewidth: 0,
          ticks: "",
        },
        type: "mesh3d",
      },
    ],
    parcoords: [
      {
        line: {
          colorbar: {
            outlinewidth: 0,
            ticks: "",
          },
        },
        type: "parcoords",
      },
    ],
    pie: [
      {
        automargin: true,
        type: "pie",
      },
    ],
    scatter3d: [
      {
        line: {
          colorbar: {
            outlinewidth: 0,
            ticks: "",
          },
        },
        marker: {
          colorbar: {
            outlinewidth: 0,
            ticks: "",
          },
        },
        type: "scatter3d",
      },
    ],
    scattercarpet: [
      {
        marker: {
          colorbar: {
            outlinewidth: 0,
            ticks: "",
          },
        },
        type: "scattercarpet",
      },
    ],
    scattergeo: [
      {
        marker: {
          colorbar: {
            outlinewidth: 0,
            ticks: "",
          },
        },
        type: "scattergeo",
      },
    ],
    scattergl: [
      {
        marker: {
          line: {
            color: "#283442",
          },
        },
        type: "scattergl",
      },
    ],
    scattermapbox: [
      {
        marker: {
          colorbar: {
            outlinewidth: 0,
            ticks: "",
          },
        },
        type: "scattermapbox",
      },
    ],
    scatterpolargl: [
      {
        marker: {
          colorbar: {
            outlinewidth: 0,
            ticks: "",
          },
        },
        type: "scatterpolargl",
      },
    ],
    scatterpolar: [
      {
        marker: {
          colorbar: {
            outlinewidth: 0,
            ticks: "",
          },
        },
        type: "scatterpolar",
      },
    ],
    scatter: [
      {
        marker: {
          line: {
            color: "#283442",
          },
        },
        type: "scatter",
      },
    ],
    scatterternary: [
      {
        marker: {
          colorbar: {
            outlinewidth: 0,
            ticks: "",
          },
        },
        type: "scatterternary",
      },
    ],
    surface: [
      {
        colorbar: {
          outlinewidth: 0,
          ticks: "",
        },
        colorscale: [
          [0.0, "#0d0887"],
          [0.1111111111111111, "#46039f"],
          [0.2222222222222222, "#7201a8"],
          [0.3333333333333333, "#9c179e"],
          [0.4444444444444444, "#bd3786"],
          [0.5555555555555556, "#d8576b"],
          [0.6666666666666666, "#ed7953"],
          [0.7777777777777778, "#fb9f3a"],
          [0.8888888888888888, "#fdca26"],
          [1.0, "#f0f921"],
        ],
        type: "surface",
      },
    ],
    table: [
      {
        cells: {
          fill: {
            color: "#506784",
          },
          line: {
            color: "rgb(17,17,17)",
          },
        },
        header: {
          fill: {
            color: "#2a3f5f",
          },
          line: {
            color: "rgb(17,17,17)",
          },
        },
        type: "table",
      },
    ],
  },
  layout: {
    annotationdefaults: {
      arrowcolor: "#f2f5fa",
      arrowhead: 0,
      arrowwidth: 1,
    },
    autotypenumbers: "strict",
    coloraxis: {
      colorbar: {
        outlinewidth: 0,
        ticks: "",
      },
    },
    colorscale: {
      diverging: [
        [0, "#8e0152"],
        [0.1, "#c51b7d"],
        [0.2, "#de77ae"],
        [0.3, "#f1b6da"],
        [0.4, "#fde0ef"],
        [0.5, "#f7f7f7"],
        [0.6, "#e6f5d0"],
        [0.7, "#b8e186"],
        [0.8, "#7fbc41"],
        [0.9, "#4d9221"],
        [1, "#276419"],
      ],
      sequential: [
        [0.0, "#0d0887"],
        [0.1111111111111111, "#46039f"],
        [0.2222222222222222, "#7201a8"],
        [0.3333333333333333, "#9c179e"],
        [0.4444444444444444, "#bd3786"],
        [0.5555555555555556, "#d8576b"],
        [0.6666666666666666, "#ed7953"],
        [0.7777777777777778, "#fb9f3a"],
        [0.8888888888888888, "#fdca26"],
        [1.0, "#f0f921"],
      ],
      sequentialminus: [
        [0.0, "#0d0887"],
        [0.1111111111111111, "#46039f"],
        [0.2222222222222222, "#7201a8"],
        [0.3333333333333333, "#9c179e"],
        [0.4444444444444444, "#bd3786"],
        [0.5555555555555556, "#d8576b"],
        [0.6666666666666666, "#ed7953"],
        [0.7777777777777778, "#fb9f3a"],
        [0.8888888888888888, "#fdca26"],
        [1.0, "#f0f921"],
      ],
    },
    colorway: [
      "#636efa",
      "#EF553B",
      "#00cc96",
      "#ab63fa",
      "#FFA15A",
      "#19d3f3",
      "#FF6692",
      "#B6E880",
      "#FF97FF",
      "#FECB52",
    ],
    font: {
      color: "#f2f5fa",
    },
    geo: {
      bgcolor: "rgb(17,17,17)",
      lakecolor: "rgb(17,17,17)",
      landcolor: "rgb(17,17,17)",
      showlakes: true,
      showland: true,
      subunitcolor: "#506784",
    },
    hoverlabel: {
      align: "left",
    },
    hovermode: "closest",
    mapbox: {
      style: "dark",
    },
    paper_bgcolor: "rgb(17,17,17)",
    plot_bgcolor: "rgb(17,17,17)",
    polar: {
      angularaxis: {
        gridcolor: "#506784",
        linecolor: "#506784",
        ticks: "",
      },
      bgcolor: "rgb(17,17,17)",
      radialaxis: {
        gridcolor: "#506784",
        linecolor: "#506784",
        ticks: "",
      },
    },
    scene: {
      xaxis: {
        backgroundcolor: "rgb(17,17,17)",
        gridcolor: "#506784",
        gridwidth: 2,
        linecolor: "#506784",
        showbackground: true,
        ticks: "",
        zerolinecolor: "#C8D4E3",
      },
      yaxis: {
        backgroundcolor: "rgb(17,17,17)",
        gridcolor: "#506784",
        gridwidth: 2,
        linecolor: "#506784",
        showbackground: true,
        ticks: "",
        zerolinecolor: "#C8D4E3",
      },
      zaxis: {
        backgroundcolor: "rgb(17,17,17)",
        gridcolor: "#506784",
        gridwidth: 2,
        linecolor: "#506784",
        showbackground: true,
        ticks: "",
        zerolinecolor: "#C8D4E3",
      },
    },
    shapedefaults: {
      line: {
        color: "#f2f5fa",
      },
    },
    sliderdefaults: {
      bgcolor: "#C8D4E3",
      bordercolor: "rgb(17,17,17)",
      borderwidth: 1,
      tickwidth: 0,
    },
    ternary: {
      aaxis: {
        gridcolor: "#506784",
        linecolor: "#506784",
        ticks: "",
      },
      baxis: {
        gridcolor: "#506784",
        linecolor: "#506784",
        ticks: "",
      },
      bgcolor: "rgb(17,17,17)",
      caxis: {
        gridcolor: "#506784",
        linecolor: "#506784",
        ticks: "",
      },
    },
    title: {
      x: 0.05,
    },
    updatemenudefaults: {
      bgcolor: "#506784",
      borderwidth: 0,
    },
    xaxis: {
      automargin: true,
      gridcolor: "#283442",
      linecolor: "#506784",
      ticks: "",
      title: {
        standoff: 15,
      },
      zerolinecolor: "#283442",
      zerolinewidth: 2,
    },
    yaxis: {
      automargin: true,
      gridcolor: "#283442",
      linecolor: "#506784",
      ticks: "",
      title: {
        standoff: 15,
      },
      zerolinecolor: "#283442",
      zerolinewidth: 2,
    },
  },
};

/*

    let plasma_colors = [
        "#0d0887",
        "#46039f",
        "#7201a8",
        "#9c179e",
        "#bd3786",
        "#d8576b",
        "#ed7953",
        "#fb9f3a",
        "#fdca26",
        "#f0f921",
    ]

    let plasma = []
    for (let i=0; i<plasma_colors.length; i++) {
        plasma.push([ (1.0 * i) / (1.0 * (plasma_colors.length - 1)), plasma_colors[i] ])
    }
    let Rhino_Core = "#2a3f5f"
    let Rhino_Dark = "#506784"
    let Rhino_Darker = "#283442"
    let Rhino_Light4 = "#f2f5fa"
    let Rhino_Medium2 = "#C8D4E3"
    let Rhino_Medium1 = "#A2B1C6"
    let grid_color = Rhino_Dark
    let axis_common = {
        gridcolor: grid_color,
        linecolor: grid_color,
        ticks: "",
        title: {
            standoff: 15
        }
    }
    let annotation_clr = Rhino_Light4
    let shape_defaults = { line_color : annotation_clr }
    let annotation_defaults = {
        "arrowcolor": annotation_clr,
        "arrowhead": 0,
        "arrowwidth": 1,
    }
    let plotly_colorway = [
        "#636efa", //Cornflower,
        "#EF553B", //Sienna,
        "#00cc96", //Emerald,
        "#ab63fa", //Lavender Shade,
        "#FFA15A",
        "#19d3f3", //Aqua Shade,
        "#FF6692",
        "#B6E880",
        "#FF97FF",
        "#FECB52",
    ]
    let jupyterlab_output_clr = "rgb(17,17,17)"
    let plotly_diverging = [
        [0, "#8e0152"],
        [0.1, "#c51b7d"],
        [0.2, "#de77ae"],
        [0.3, "#f1b6da"],
        [0.4, "#fde0ef"],
        [0.5, "#f7f7f7"],
        [0.6, "#e6f5d0"],
        [0.7, "#b8e186"],
        [0.8, "#7fbc41"],
        [0.9, "#4d9221"],
        [1, "#276419"],
    ]
    var baseLayout = {
        autotypenumbers : "strict",
        hovermode : "closest",
        hoverlabel : {align : "left"},

        title: 'Dark Template',
        //font_clr
        font: {color:Rhino_Light4},
        //paper_clr
        paper_bgcolor :jupyterlab_output_clr,
        // panel_background_clr
        plot_bgcolor :jupyterlab_output_clr,
        polar:{bgcolor :jupyterlab_output_clr},
        ternary: {bgcolor:jupyterlab_output_clr},

        cartesian_axis : {
            axis_common: axis_common,
            //zerolinecolor_clr
            zerolinecolor:Rhino_Medium2,
        },
        panel_grid_clr:grid_color ,
        axis_ticks_clr:Rhino_Medium1,
        table_cell_clr: Rhino_Dark,
        table_header_clr: Rhino_Core,
        table_line_clr:jupyterlab_output_clr,
        colorway:plotly_colorway,
        colorbar_common: {
            outlinewidth: 0,
            ticks: ""
        },
        colorscale: plasma,
        colorscale_diverging:plotly_diverging,
        annotation_defaults: annotation_defaults,
        shapedefaults :shape_defaults ,
        
        geo: {
            bgcolor:jupyterlab_output_clr,
            landcolor:jupyterlab_output_clr,
            subunitcolor:grid_color,
            showland:true,
            showlakes: true,
            lakecolor:jupyterlab_output_clr
        },
    };

    template_from_file=template
    template = {data: [], layout: baseLayout};
    template = Plotly.makeTemplate(template)

    template.layout.sliderdefaults = {}
    template.layout.sliderdefaults.bgcolor = "#C8D4E3"
    template.layout.sliderdefaults.borderwidth = 1
    template.layout.sliderdefaults.bordercolor = "rgb(17,17,17)"
    template.layout.sliderdefaults.tickwidth = 0

    template.layout.xaxis = {}
    template.layout.yaxis = {}
    template.layout.xaxis.gridcolor = Rhino_Darker
    template.layout.yaxis.gridcolor = Rhino_Darker

    template.layout.xaxis.zerolinecolor = Rhino_Darker
    template.layout.yaxis.zerolinecolor = Rhino_Darker
    template.layout.xaxis.zerolinewidth = 2
    template.layout.yaxis.zerolinewidth = 2

    template.layout.mapbox = {}
    template.layout.mapbox.style = "dark"

    opts = {"marker": {"line": {"color": Rhino_Darker}}}
    template.data.scatter = [opts]
    template.data.scattergl = [opts]

    template.data.pie = [{"automargin": true}]
*/
