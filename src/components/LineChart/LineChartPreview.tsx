import 'chartjs-adapter-date-fns';
import { Container, Flex, Stack } from '@chakra-ui/react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from 'chart.js';
import { eachDayOfInterval, format, subDays } from 'date-fns';
import { enIN } from 'date-fns/locale';
import faker from 'faker';
import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { IDataSets } from '~/types/IDataSets';

import DataSetSwitcher from './DataSetSwitcher';
import IntervalToggler from './IntervalToggler';
import TopBar from './TopBar';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
);

const LineChartPreview = () => {
  const [dayInterval, setDateInterval] = useState(30);
  const [labels, setLabels] = useState<string[]>([]);
  const [datasets, setDatasets] = useState<IDataSets[]>([]);
  const [zoom, setZoom] = useState(false);
  const data = {
    labels,
    datasets: [...datasets],
  };
  const dataSetsStored = [
    {
      label: 'AAVE v2',
      data: labels.map((value, i) => {
        return {
          x: format(new Date(value), 'yyyy-MM-dd'),
          y: faker.datatype.number({ min: i, max: i + 3 }),
        };
      }),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Compound',
      data: labels.map((value, i) => {
        return {
          x: format(new Date(value), 'yyyy-MM-dd'),
          y: faker.datatype.number({ min: i + 10, max: i + 13 }),
        };
      }),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ];

  const convertDataToJsonFromObject = (data: {
    labels: string[];
    datasets: IDataSets[];
  }) => {
    const { labels, datasets } = data;

    const datasetsJson = datasets.map((dataset) => {
      const data = dataset.data.map((value) => {
        return {
          [dataset.label]: value.y,
        };
      });
      return data;
    });

    const finalData = labels.map((value, i) => {
      return {
        Date: value,
        ...datasetsJson.map((dataset) => {
          return {
            ...dataset[i],
          };
        }),
      };
    });

    const newFinalData = finalData.map((value) => {
      return {
        Date: value.Date,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore.
        ...value['0'],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore.
        ...value['1'],
      };
    });

    return newFinalData;
  };

  // combine keys of two array and join them in single convertDataToJsonFromObject

  const updatedataSetHandler = (dataSetsStoredValue: IDataSets[]) => {
    setDatasets(
      dataSetsStoredValue.filter((set) =>
        datasets.map((data) => data.label).includes(set.label),
      ),
    );
  };

  const dataSetHandler = (dataSet: IDataSets) => {
    if (!datasets.map((data) => data.label).includes(dataSet.label)) {
      setDatasets([...datasets, dataSet]);
    } else {
      setDatasets(
        datasets.filter((dataset) => dataset.label !== dataSet.label),
      );
    }
  };

  const changeIntervalHandler = (days: number) => {
    setDateInterval(days);
  };

  const toggleZoom = () => {
    setZoom(!zoom);
  };

  useEffect(() => {
    const result = eachDayOfInterval({
      end: new Date(),
      start: new Date(subDays(new Date(), dayInterval)),
    }).map((date) => format(date, 'yyyy-MM-dd'));
    setLabels(result);
  }, [setLabels, dayInterval]);

  useEffect(() => {
    updatedataSetHandler(dataSetsStored);
    // This is be executed when `loading` state changes
  }, [labels]);

  console.log(data);

  return (
    <>
      <Container maxW={zoom ? '100%' : 'container.xl'} p={0}>
        <DataSetSwitcher
          dataSetHandler={dataSetHandler}
          dataSetsStored={dataSetsStored}
        />

        <Stack spacing="1px">
          <TopBar
            downloadData={() => convertDataToJsonFromObject(data)}
            toggleZoom={toggleZoom}
          />
          <Stack spacing={0}>
            <IntervalToggler
              changeIntervalHandler={changeIntervalHandler}
              dayInterval={dayInterval}
            />
            <Flex px={4} pb={4} h={zoom ? '70vh' : '350px'}>
              {labels.length > 0 && (
                <Line
                  options={{
                    maintainAspectRatio: false,
                    resizeDelay: 100,
                    scales: {
                      x: {
                        grid: {
                          display: false,
                        },
                        axis: 'x',
                        type: 'time',
                        time: {
                          minUnit: 'day',

                          unit: 'day',
                          stepSize: 7,
                        },
                        adapters: {
                          date: {
                            locale: enIN,
                          },
                        },
                      },
                    },

                    responsive: true,

                    plugins: {
                      legend: {
                        display: false,
                        // onClick: () => {},
                        position: 'bottom' as const,
                      },
                      title: {
                        display: false,
                        text: 'Chart.js Line Chart',
                      },
                    },
                  }}
                  data={{
                    datasets,
                  }}
                />
              )}
            </Flex>
          </Stack>
        </Stack>
      </Container>
      {/* <ChartsCarousel /> */}
    </>
  );
};

export default LineChartPreview;
