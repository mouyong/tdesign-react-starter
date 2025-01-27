import React from 'react';
import { Col, Radio, Row, Table, Button } from 'tdesign-react';
import { TdPrimaryTableProps } from 'tdesign-react/es/table';
import classnames from 'classnames';
import Board from 'components/Card';
import { TrendIcon } from 'components/Board';
import { PURCHASE_TREND_LIST, SALE_TREND_LIST } from '../constant';
import Style from './RankList.module.less';

const DateRadioGroup = (
  <Radio.Group defaultValue='recent_week'>
    <Radio.Button value='recent_week'>本周</Radio.Button>
    <Radio.Button value='recent_month'>近三个月</Radio.Button>
  </Radio.Group>
);

const SALE_COLUMNS: TdPrimaryTableProps['columns'] = [
  {
    align: 'center',
    colKey: 'index',
    title: '排名',
    width: 80,
    fixed: 'left',
    render: ({ rowIndex }) => (
      <span className={classnames(Style.rankIndex, { [Style.rankIndexTop]: rowIndex < 3 })}>{rowIndex + 1}</span>
    ),
  },
  {
    align: 'left',
    ellipsis: true,
    colKey: 'productName',
    title: '客户名称',
    minWidth: 200,
  },
  {
    align: 'center',
    colKey: 'growUp',
    width: 100,
    title: '较上周',
    render: ({ row }) => <TrendIcon trend={row.growUp < 0 ? 'down' : 'up'} trendNum={Math.abs(row.growUp)} />,
  },
  {
    align: 'center',
    colKey: 'count',
    title: '订单量',
    width: 100,
  },
  {
    align: 'center',
    colKey: 'date',
    width: 140,
    title: '合同签订日期',
  },
  {
    align: 'center',
    colKey: 'operation',
    fixed: 'right',
    title: '操作',
    width: 80,
    render: ({ row }) => (
      <Button variant='text' theme='primary' onClick={() => console.log(row)}>
        操作
      </Button>
    ),
  },
];

const PURCHASE_COLUMNS: TdPrimaryTableProps['columns'] = [
  {
    align: 'center',
    colKey: 'index',
    title: '排名',
    width: 80,
    fixed: 'left',
    render: ({ rowIndex }) => (
      <span className={classnames(Style.rankIndex, { [Style.rankIndexTop]: rowIndex < 3 })}>{rowIndex + 1}</span>
    ),
  },
  {
    align: 'left',
    ellipsis: true,
    colKey: 'productName',
    title: '供应商名称',
    minWidth: 200,
  },
  {
    align: 'center',
    colKey: 'growUp',
    width: 100,
    title: '较上周',
    render: ({ row }) => <TrendIcon trend={row.growUp < 0 ? 'down' : 'up'} trendNum={Math.abs(row.growUp)} />,
  },
  {
    align: 'center',
    colKey: 'count',
    title: '订单量',
    width: 100,
  },
  {
    align: 'center',
    colKey: 'date',
    width: 140,
    title: '合同签订日期',
  },
  {
    align: 'center',
    colKey: 'operation',
    title: '操作',
    fixed: 'right',
    width: 80,
    render: ({ row }) => (
      <Button variant='text' theme='primary' onClick={() => console.log(row)}>
        操作
      </Button>
    ),
  },
];

const RankList = () => (
  <Row gutter={[16, 16]} className={Style.rankListPanel}>
    <Col xs={12} xl={6} span={12}>
      <Board title='销售订单排名' operation={DateRadioGroup}>
        <Table columns={SALE_COLUMNS} rowKey='productName' size='medium' data={SALE_TREND_LIST} />
      </Board>
    </Col>
    <Col xs={12} xl={6} span={12}>
      <Board title='采购订单排名' operation={DateRadioGroup}>
        <Table columns={PURCHASE_COLUMNS} rowKey='productName' size='medium' data={PURCHASE_TREND_LIST} />
      </Board>
    </Col>
  </Row>
);

export default React.memo(RankList);
