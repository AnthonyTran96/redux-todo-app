import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
import { searchFilterChange , statusFilterChange, priorityFilterChange} from '../../redux/actions';

const { Search } = Input;

export default function Filters() {
  const dispatch=useDispatch();

  const [searchText,setSearchText]=useState('');
  const [filterStatus,setFilterStatus]=useState('All');
  const [filterPriority, setFilterPriority]=useState([]);

  const handleSearchTextChange=(e)=>{
    setSearchText(e.target.value);
    dispatch(searchFilterChange(e.target.value));
  }
  const handleFilterStatusChange=(e)=>{
    setFilterStatus(e.target.value);
    dispatch(statusFilterChange(e.target.value));
  }
  const handlePriorityChange=(priorities)=>{
    setFilterPriority(priorities);
    dispatch(priorityFilterChange(priorities));
  }
  return (
    <Row justify='center'>
      <Col span={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Search
        </Typography.Paragraph>
        <Search placeholder='input search text' value={searchText} onChange={handleSearchTextChange}/>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleFilterStatusChange}>
          <Radio value='All'>All</Radio>
          <Radio value='Completed'>Completed</Radio>
          <Radio value='Todo'>To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph
          style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
        >
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode='multiple'
          allowClear
          placeholder='Please select'
          style={{ width: '100%' }}
          value={filterPriority}
          onChange={handlePriorityChange}
        >
          <Select.Option value='High' label='High'>
            <Tag color='red'>High</Tag>
          </Select.Option>
          <Select.Option value='Medium' label='Medium'>
            <Tag color='blue'>Medium</Tag>
          </Select.Option>
          <Select.Option value='Low' label='Low'>
            <Tag color='gray'>Low</Tag>
          </Select.Option>
        </Select>
      </Col>
    </Row>
  );
}
