window.onload = function () {
    var obj = JSON.parse(localStorage.getItem('gameStorage'));
    var jsondata = JSON.stringify(obj, undefined, 4);
    var profiledata = JSON.parse(localStorage.getItem('gameStorage1'));
    var textdata = JSON.parse(localStorage.getItem('gameStorage2'));
    var summarytext = JSON.parse(localStorage.getItem('gameStorage4'));
    var likelydata = JSON.parse(localStorage.getItem('gameStorage5'));
    $wordcount=obj.word_count;
    $countmsg=obj.word_count_message;
    document.getElementById('wordcount').innerHTML= $wordcount;
    if ($countmsg!=undefined){
        document.getElementById('wdcount').innerHTML = $countmsg;
        document.getElementById('pname').style.paddingTop= "7%" ;
        document.getElementById('pname').style.paddingBottom = "3%";
    }
   // $accuracy=$wordcount/10000*100;
    document.getElementById('likelydata').innerHTML=likelydata;
    document.getElementById('summarytext').innerHTML=summarytext;
    document.getElementById('textdata').innerHTML=textdata;
    document.getElementById('jsondata').innerHTML=jsondata;
    document.getElementById('pname').innerHTML=profiledata.first_name +' ' + profiledata.last_name;
    document.getElementById('pid').innerHTML=profiledata.id;
    document.getElementById('pimage').src=profiledata.picture.data.url;
    $("#bigfive").show();
    $("#value").hide();
    $("#customerneed").hide();
    $("#json").hide();
        $openness=obj.personality[0].percentile*100;
        $openness1=(obj.personality[0].children[0].percentile*100).toFixed(2)/1;
        $opennesslab1=obj.personality[0].children[0].name;
        $openness2=(obj.personality[0].children[1].percentile*100).toFixed(2)/1;
        $opennesslab2=obj.personality[0].children[1].name;
        $openness3=(obj.personality[0].children[2].percentile*100).toFixed(2)/1;
        $opennesslab3=obj.personality[0].children[2].name;
        $openness4=(obj.personality[0].children[3].percentile*100).toFixed(2)/1;
        $opennesslab4=obj.personality[0].children[3].name;
        $openness5=(obj.personality[0].children[4].percentile*100).toFixed(2)/1;
        $opennesslab5=obj.personality[0].children[4].name;
        $openness6=(obj.personality[0].children[5].percentile*100).toFixed(2)/1;
        $opennesslab6=obj.personality[0].children[5].name;
        var circle_chart1 = new CanvasJS.Chart("circlechartContainer1",
            {
                title:{
                    text: "Openness"
                },
                animationEnabled: true,
                data: [
                    {
                        type: "doughnut",
                        startAngle: 180,
                        toolTipContent: "{legendText}: <strong>#percent% </strong>",
                        showInLegend: true,
                        explodeOnClick: true, //**Change it to true
                        dataPoints: [
                            {y: $openness, indexLabel: "Openness", legendText: "Openness" },
                            {y: 100-$openness, indexLabel: "", legendText: "Not Present" }
                        ]
                    }
                ]
            });
        circle_chart1.render();
        var bar_chart1 = new CanvasJS.Chart("barchartContainer1",
            {

                data: [
                    {
                        type: "bar",

                        dataPoints: [
                            { x: 10, y: $openness1, label:$opennesslab1 +":"+$openness1+"%"},
                            { x: 20, y: $openness2, label:$opennesslab2 +":"+$openness2+"%"},
                            { x: 30, y: $openness3, label:$opennesslab3 +":"+$openness3+"%"},
                            { x: 40, y: $openness4, label:$opennesslab4 +":"+$openness4+"%"},
                            { x: 50, y: $openness5, label:$opennesslab5+":"+$openness5+"%"},
                            { x: 60, y: $openness6, label:$opennesslab6 +":"+$openness6+"%"}
                        ]
                    }
                ]
            });
        bar_chart1.render();
        $agree=(obj.personality[1].percentile*100).toFixed(2)/1;
        $agree1=(obj.personality[1].children[0].percentile*100).toFixed(2)/1;
        $agreelab1=obj.personality[1].children[0].name;
        $agree2=(obj.personality[1].children[1].percentile*100).toFixed(2)/1;
        $agreelab2=obj.personality[1].children[1].name;
        $agree3=(obj.personality[1].children[2].percentile*100).toFixed(2)/1;
        $agreelab3=obj.personality[1].children[2].name;
        $agree4=(obj.personality[1].children[3].percentile*100).toFixed(2)/1;
        $agreelab4=obj.personality[1].children[3].name;
        $agree5=(obj.personality[1].children[4].percentile*100).toFixed(2)/1;
        $agreelab5=obj.personality[1].children[4].name;
        $agree6=(obj.personality[1].children[5].percentile*100).toFixed(2)/1;
        $agreelab6=obj.personality[1].children[5].name;
        var circle_chart2 = new CanvasJS.Chart("circlechartContainer2",
            {
                title:{
                    text: "Agreeableness"
                },
                animationEnabled: true,
                data: [
                    {
                        type: "doughnut",
                        startAngle: 180,
                        toolTipContent: "{legendText}:<strong>#percent% </strong>",
                        showInLegend: true,
                        explodeOnClick: true, //**Change it to true
                        dataPoints: [
                            {y: $agree, indexLabel: "Agreeableness #percent%", legendText: "Agreeableness" },
                            {y: 100-$agree, indexLabel: "", legendText: "Not Present" }
                        ]
                    }
                ]
            });
        circle_chart2.render();
        var bar_chart2 = new CanvasJS.Chart("barchartContainer2",
            {
                data: [
                    {
                        type: "bar",

                        dataPoints: [
                            { x: 10, y: $agree1, label:$agreelab1+":"+$agree1+"%" },
                            { x: 20, y: $agree2, label:$agreelab2+":"+$agree2+"%" },
                            { x: 30, y: $agree3, label:$agreelab3 +":"+$agree3+"%"},
                            { x: 40, y: $agree4, label:$agreelab4 +":"+$agree4+"%"},
                            { x: 50, y: $agree5, label:$agreelab5 +":"+$agree5+"%"},
                            { x: 60, y: $agree6, label:$agreelab6 +":"+$agree6+"%"}
                        ]
                    }
                ]
            });
        bar_chart2.render();
        $extra=(obj.personality[2].percentile*100).toFixed(2)/1;
        $extra1=(obj.personality[2].children[0].percentile*100).toFixed(2)/1;
        $extralab1=obj.personality[2].children[0].name;
        $extra2=(obj.personality[2].children[1].percentile*100).toFixed(2)/1;
        $extralab2=obj.personality[2].children[1].name;
        $extra3=(obj.personality[2].children[2].percentile*100).toFixed(2)/1;
        $extralab3=obj.personality[2].children[2].name;
        $extra4=(obj.personality[2].children[3].percentile*100).toFixed(2)/1;
        $extralab4=obj.personality[2].children[3].name;
        $extra5=(obj.personality[2].children[4].percentile*100).toFixed(2)/1;
        $extralab5=obj.personality[2].children[4].name;
        $extra6=(obj.personality[2].children[5].percentile*100).toFixed(2)/1;
        $extralab6=obj.personality[2].children[5].name;
        var circle_chart3 = new CanvasJS.Chart("circlechartContainer3",
            {
                title:{
                    text: "Introversion/Extraversion"
                },
                animationEnabled: true,
                data: [
                    {
                        type: "doughnut",
                        startAngle: 180,
                        toolTipContent: "{legendText}:<strong>#percent% </strong>",
                        showInLegend: true,
                        explodeOnClick: true, //**Change it to true
                        dataPoints: [
                            {y: $extra, indexLabel: "Introversion/Extraversion #percent%", legendText: "Introversion/Extraversion" },
                            {y: 100-$extra, indexLabel: "", legendText: "Not Present" }
                        ]
                    }
                ]
            });
        circle_chart3.render();
        var bar_chart3 = new CanvasJS.Chart("barchartContainer3",
            {
                data: [
                    {
                        type: "bar",

                        dataPoints: [
                            { x: 10, y: $extra1, label:$extralab1 +":"+$extra1+"%" },
                            { x: 20, y: $extra2, label:$extralab2 +":"+$extra2+"%"},
                            { x: 30, y: $extra3, label:$extralab3 +":"+$extra3+"%"},
                            { x: 40, y: $extra4, label:$extralab4 +":"+$extra4+"%"},
                            { x: 50, y: $extra5, label:$extralab5 +":"+$extra5+"%"},
                            { x: 60, y: $extra6, label:$extralab6 +":"+$extra6+"%"}
                        ]
                    }
                ]
            });
        bar_chart3.render();
        $emrange=(obj.personality[3].percentile*100).toFixed(2)/1;
        $emrange1=(obj.personality[3].children[0].percentile*100).toFixed(2)/1;
        $emrangelab1=obj.personality[3].children[0].name;
        $emrange2=(obj.personality[3].children[1].percentile*100).toFixed(2)/1;
        $emrangelab2=obj.personality[3].children[1].name;
        $emrange3=(obj.personality[3].children[2].percentile*100).toFixed(2)/1;
        $emrangelab3=obj.personality[3].children[2].name;
        $emrange4=(obj.personality[3].children[3].percentile*100).toFixed(2)/1;
        $emrangelab4=obj.personality[3].children[3].name;
        $emrange5=(obj.personality[3].children[4].percentile*100).toFixed(2)/1;
        $emrangelab5=obj.personality[3].children[4].name;
        $emrange6=(obj.personality[3].children[5].percentile*100).toFixed(2)/1;
        $emrangelab6=obj.personality[3].children[5].name;
        var circle_chart4 = new CanvasJS.Chart("circlechartContainer4",
            {
                title:{
                    text: "Emotional Range"
                },
                animationEnabled: true,
                data: [
                    {
                        type: "doughnut",
                        startAngle: 180,
                        toolTipContent: "{legendText}:<strong>#percent% </strong>",
                        showInLegend: true,
                        explodeOnClick: true, //**Change it to true
                        dataPoints: [
                            {y: $emrange, indexLabel: "Emotional Range #percent%", legendText: "Emotional Range" },
                            {y: 100-$emrange, indexLabel: "", legendText: "Not Present" }
                        ]
                    }
                ]
            });
        circle_chart4.render();
        var bar_chart4 = new CanvasJS.Chart("barchartContainer4",
            {
                data: [
                    {
                        type: "bar",

                        dataPoints: [
                            { x: 10, y: $emrange1, label:$emrangelab1 +":"+$emrange1+"%" },
                            { x: 20, y: $emrange2, label:$emrangelab2 +":"+$emrange2+"%"},
                            { x: 30, y: $emrange3, label:$emrangelab3 +":"+$emrange3+"%"},
                            { x: 40, y: $emrange4, label:$emrangelab4 +":"+$emrange4+"%"},
                            { x: 50, y: $emrange5, label:$emrangelab5 +":"+$emrange5+"%"},
                            { x: 60, y: $emrange6, label:$emrangelab6 +":"+$emrange6+"%"}
                        ]
                    }
                ]
            });
        bar_chart4.render();
        $Consci=(obj.personality[4].percentile*100).toFixed(2)/1;
        $Consci1=(obj.personality[4].children[0].percentile*100).toFixed(2)/1;
        $Conscilab1=obj.personality[4].children[0].name;
        $Consci2=(obj.personality[4].children[1].percentile*100).toFixed(2)/1;
        $Conscilab2=obj.personality[4].children[1].name;
        $Consci3=(obj.personality[4].children[2].percentile*100).toFixed(2)/1;
        $Conscilab3=obj.personality[4].children[2].name;
        $Consci4=(obj.personality[4].children[3].percentile*100).toFixed(2)/1;
        $Conscilab4=obj.personality[4].children[3].name;
        $Consci5=(obj.personality[4].children[4].percentile*100).toFixed(2)/1;
        $Conscilab5=obj.personality[4].children[4].name;
        $Consci6=(obj.personality[4].children[5].percentile*100).toFixed(2)/1;
        $Conscilab6=obj.personality[4].children[5].name;
        var circle_chart5 = new CanvasJS.Chart("circlechartContainer5",
            {
                title:{
                    text: "Conscientiousness"
                },
                animationEnabled: true,
                data: [
                    {
                        type: "doughnut",
                        startAngle: 180,
                        toolTipContent: "{legendText}: {y} - <strong>#percent% </strong>",
                        showInLegend: true,
                        explodeOnClick: true, //**Change it to true
                        dataPoints: [
                            {y: $Consci, indexLabel: "Conscientiousness #percent%", legendText: "Conscientiousness" },
                            {y: 100-$Consci, indexLabel: "", legendText: "Not Present" }
                        ]
                    }
                ]
            });
        circle_chart5.render();
        var bar_chart5 = new CanvasJS.Chart("barchartContainer5",
            {

                data: [
                    {
                        type: "bar",

                        dataPoints: [
                            { x: 10, y: $Consci1, label:$Conscilab1+":"+$Consci1+"%" },
                            { x: 20, y: $Consci2, label:$Conscilab2+":"+$Consci2+"%" },
                            { x: 30, y: $Consci3, label:$Conscilab3+":"+$Consci3+"%" },
                            { x: 40, y: $Consci4, label:$Conscilab4+":"+$Consci4+"%" },
                            { x: 50, y: $Consci5, label:$Conscilab5+":"+$Consci5+"%" },
                            { x: 60, y: $Consci6, label:$Conscilab6+":"+$Consci6+"%" }
                        ]
                    }
                ]
            });
        bar_chart5.render();
    $("#cusneed").click(function(){
        $("#bigfive").hide();
        $("#value").hide();
        $("#customerneed").show();
        $("#json").hide();
        $needs0=(obj.needs[0].percentile*100).toFixed(2)/1;
        $needslab0=obj.needs[0].name;
        $needs1=(obj.needs[1].percentile*100).toFixed(2)/1;
        $needslab1=obj.needs[1].name
        $needs2=(obj.needs[2].percentile*100).toFixed(2)/1;
        $needslab2=obj.needs[2].name
        $needs3=(obj.needs[3].percentile*100).toFixed(2)/1;
        $needslab3=obj.needs[3].name
        $needs4=(obj.needs[4].percentile*100).toFixed(2)/1;
        $needslab4=obj.needs[4].name
        $needs5=(obj.needs[5].percentile*100).toFixed(2)/1;
        $needslab5=obj.needs[5].name
        $needs6=(obj.needs[6].percentile*100).toFixed(2)/1;
        $needslab6=obj.needs[6].name
        $needs7=(obj.needs[7].percentile*100).toFixed(2)/1;
        $needslab7=obj.needs[7].name
        $needs8=(obj.needs[8].percentile*100).toFixed(2)/1;
        $needslab8=obj.needs[8].name
        $needs9=(obj.needs[9].percentile*100).toFixed(2)/1;
        $needslab9=obj.needs[9].name
        $needs10=(obj.needs[10].percentile*100).toFixed(2)/1;
        $needslab10=obj.needs[10].name
        $needs11=(obj.needs[11].percentile*100).toFixed(2)/1;
        $needslab11=obj.needs[11].name

        var chartcustomr = new CanvasJS.Chart("chartContainercustomer", {
            title: {
            },
            axisX: {
                interval: 10
            },
            dataPointWidth: 60,
            data: [{
                type: "column",
                indexLabelLineThickness: 1,
                dataPoints: [
                    { x: 10, y:$needs0 , label:$needslab0  +":"+$needs0+"%"},
                    { x: 20, y: $needs1, label:$needslab1 +":"+$needs1+"%"},
                    { x: 30, y: $needs2, label:$needslab2 +":"+$needs2+"%"},
                    { x: 40, y: $needs3, label:$needslab3 +":"+$needs3+"%"},
                    { x: 50, y: $needs4, label:$needslab4 +":"+$needs4+"%"},
                    { x: 60, y: $needs5, label:$needslab5+":"+$needs5+"%"},
                    { x: 70, y: $needs6, label:$needslab6+":"+$needs6+"%"},
                    { x: 80, y: $needs7, label:$needslab7+":"+$needs7+"%"},
                    { x: 90, y: $needs8, label:$needslab8+":"+$needs8+"%"},
                    { x: 100, y: $needs9, label:$needslab9+":"+$needs9+"%"},
                    { x: 110, y: $needs10, label:$needslab10+":"+$needs10+"%"},
                    { x: 120, y: $needs11, label:$needslab11+":"+$needs11+"%"}
                ]
            }]
        });
        chartcustomr.render();
    });
    $("#val").click(function(){
        $("#bigfive").hide();
        $("#value").show();
        $("#customerneed").hide();
        $("#json").hide();
        console.log(obj);
        $val1=(obj.values[0].percentile*100).toFixed(2)/1;
        $vallab1=obj.values[0].name;
        $val2=(obj.values[1].percentile*100).toFixed(2)/1;
        $vallab2=obj.values[1].name;
        $val3=(obj.values[2].percentile*100).toFixed(2)/1;
        $vallab3=obj.values[2].name;
        $val4=(obj.values[3].percentile*100).toFixed(2)/1;
        $vallab4=obj.values[3].name;
        $val5=(obj.values[4].percentile*100).toFixed(2)/1;
        $vallab5=obj.values[4].name;

        var bar_chartvalue = new CanvasJS.Chart("barchartContainervalue",
            {

                data: [
                    {
                        type: "bar",

                        dataPoints: [
                            { x: 10, y: $val1, label:$vallab1 +":"+$val1+"%"},
                            { x: 20, y: $val2, label:$vallab2 +":"+$val2+"%" },
                            { x: 30, y: $val3, label:$vallab3 +":"+$val3+"%"},
                            { x: 40, y: $val4, label:$vallab4 +":"+$val4+"%"},
                            { x: 50, y: $val5, label:$vallab5 +":"+$val5+"%"},
                        ]
                    }
                ]
            });
        bar_chartvalue.render();

    });
    $("#jdata").click(function(){
        $("#bigfive").hide();
        $("#value").hide();
        $("#customerneed").hide();
        $("#json").show();
    });

  //  $.getJSON('data/data.json', function(data){

  //  });
    }