import { Flex, Heading, HStack } from '@chakra-ui/react';
import { FC } from 'react';
import { GiExpand } from 'react-icons/gi';
import { GrDocumentDownload } from 'react-icons/gr';

import { IDataSets } from '~/types/IDataSets';

import CSVDownloader from './CSVDownloader';

interface TopBarProps {
  downloadData: (data: { labels: string[]; datasets: IDataSets[] }) => unknown;
  toggleZoom: () => void;
}

const TopBar: FC<TopBarProps> = ({ downloadData, toggleZoom }) => {
  return (
    <Flex borderTopRadius="md" p="2" bg="gray.100" justify="space-between">
      <Heading fontSize={{ base: 'md', sm: 'lg' }}>
        Liquidty Coverage Ratio (LCR)
      </Heading>
      <HStack fontSize="2xl">
        <CSVDownloader data={downloadData}>
          <GrDocumentDownload />
        </CSVDownloader>
        <GiExpand onClick={toggleZoom} />
      </HStack>
    </Flex>
  );
};
export default TopBar;
