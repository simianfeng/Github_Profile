import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs';

var BarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});
