
    $scope.processDisChargeData = function(rawData) {
        var arrayLength = rawData.length;
        var cur = [];
        var sum = 0;
        var sumArr = [];
        for (var i = arrayLength - 1; i >= 0; i--) {
            var row = [];
            var sumRow = [];
            var chCur = rawData[i].ch_cur;
            var current = 0;
            if (chCur >= 200)
                current = 1000 * chCur / (4095 * 2);
            sum += current;
            row.push(new Date(rawData[i].timestp).getTime());
            row.push(Number(current).toFixed(2));
            sumRow.push(new Date(rawData[i].timestp).getTime());
            sumRow.push(Number(sum).toFixed(2));
            //Do something
            cur.push(row);
            sumArr.push(sumRow);
        }
        // console.log(cur);
        // console.log(sumArr);
        $scope.pushDisChargeData(cur, sumArr);
    }


    $scope.pushDisChargeData = function(currents, currentSum) {

        // console.log(currents);
        // console.log(currentSum);
        $scope.disChargeData = [{
            "key": "Quantity",
            "bar": true,
            "values": currentSum
        }, {
            "key": "Price",
            "values": currents
        }].map(function(series) {
            series.values = series.values.map(function(d) {
                return { x: d[0], y: d[1] }
            });
            return series;
        });

        $scope.disChargeOptions = {
            chart: {
                type: 'linePlusBarChart',
                height: 500,
                margin: {
                    top: 30,
                    right: 75,
                    bottom: 50,
                    left: 75
                },
                bars: {
                    forceY: [0]
                },
                bars2: {
                    forceY: [0]
                },
                color: ['#2ca02c', 'darkred'],
                x: function(d, i) {
                    return i
                },
                xAxis: {
                    axisLabel: 'X Axis',
                    tickFormat: function(d) {
                        var dx = $scope.disChargeData[0].values[d] && $scope.disChargeData[0].values[d].x || 0;
                        if (dx > 0) {
                            return d3.time.format('%x')(new Date(dx))
                        }
                        return null;
                    }
                },
                x2Axis: {
                    tickFormat: function(d) {
                        var dx = $scope.disChargeData[0].values[d] && $scope.disChargeData[0].values[d].x || 0;
                        return d3.time.format('%b-%Y')(new Date(dx))
                    },
                    showMaxMin: false
                },
                y1Axis: {
                    axisLabel: 'Y1 Axis',
                    tickFormat: function(d) {
                        return d3.format(',f')(d);
                    },
                    axisLabelDistance: 12
                },
                y2Axis: {
                    axisLabel: 'Y2 Axis',
                    tickFormat: function(d) {
                        return '$' + d3.format(',.2f')(d)
                    }
                },
                y3Axis: {
                    tickFormat: function(d) {
                        return d3.format(',f')(d);
                    }
                },
                y4Axis: {
                    tickFormat: function(d) {
                        return '$' + d3.format(',.2f')(d)
                    }
                }
            }
        };

    }