const l={title:"UI 패턴/리스트/DataList",tags:["autodocs","done"],parameters:{layout:"centered"},argTypes:{active:{control:"boolean",description:"활성 상태 (첫 번째 아이템)"},clickable:{control:"boolean",description:"호버/클릭 가능 상태"},desc:{control:"boolean",description:"설명 텍스트 (data-list__desc)"},rightColumn:{control:"radio",options:["없음","텍스트","상태배지"],description:"우측 영역"},countBadge:{control:"boolean",description:"카운터 배지"}},args:{active:!1,clickable:!1,desc:!1,rightColumn:"없음",countBadge:!1}},s={name:"DataList",render:i=>({setup(){return{args:i}},template:`
      <ul class="data-list w-80">
        <li class="data-list__item" :class="[{ active: args.active }, args.clickable ? 'cursor-pointer hover:bg-surface-muted' : 'cursor-default']">
          <div class="data-list__cont data-list__cont-left">
            <p v-if="args.countBadge" class="flex items-center gap-1">
              <strong class="truncate">홍길동</strong>
              <UiBadge variant="count" tone="default" size="sm">5</UiBadge>
            </p>
            <strong class="truncate" v-else>홍길동</strong>
            <span v-if="args.desc" class="data-list__desc">개발팀 · 사원</span>
          </div>
          <div v-if="args.rightColumn === '텍스트'" class="data-list__cont data-list__cont-right">
            <span>2024-01-15</span>
            <span v-if="args.desc" class="data-list__desc">등록일</span>
          </div>
          <UiBadge v-if="args.rightColumn === '상태배지'" variant="hold" class="self-start">예약중</UiBadge>
        </li>
        <li class="data-list__item" :class="args.clickable ? 'cursor-pointer hover:bg-surface-muted' : 'cursor-default'">
          <div class="data-list__cont data-list__cont-left">
            <p v-if="args.countBadge" class="flex items-center gap-1">
              <strong class="truncate">김철수</strong>
              <UiBadge variant="count" tone="default" size="sm">12</UiBadge>
            </p>
            <strong class="truncate" v-else>김철수</strong>
            <span v-if="args.desc" class="data-list__desc">디자인팀 · 대리</span>
          </div>
          <div v-if="args.rightColumn === '텍스트'" class="data-list__cont data-list__cont-right">
            <span>2024-03-22</span>
            <span v-if="args.desc" class="data-list__desc">등록일</span>
          </div>
        </li>
        <li class="data-list__item" :class="args.clickable ? 'cursor-pointer hover:bg-surface-muted' : 'cursor-default'">
          <div class="data-list__cont data-list__cont-left">
            <p v-if="args.countBadge" class="flex items-center gap-1">
              <strong class="truncate">이영희</strong>
              <UiBadge variant="count" tone="default" size="sm">999+</UiBadge>
            </p>
            <strong class="truncate" v-else>이영희</strong>
            <span v-if="args.desc" class="data-list__desc">기획팀 · 과장</span>
          </div>
          <div v-if="args.rightColumn === '텍스트'" class="data-list__cont data-list__cont-right">
            <span>2023-11-08</span>
            <span v-if="args.desc" class="data-list__desc">등록일</span>
          </div>
          <UiBadge v-if="args.rightColumn === '상태배지'" variant="hold" class="self-start">예약중</UiBadge>
        </li>
      </ul>
    `})};var a,t,e;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: 'DataList',
  render: args => ({
    setup() {
      return {
        args
      };
    },
    template: \`
      <ul class="data-list w-80">
        <li class="data-list__item" :class="[{ active: args.active }, args.clickable ? 'cursor-pointer hover:bg-surface-muted' : 'cursor-default']">
          <div class="data-list__cont data-list__cont-left">
            <p v-if="args.countBadge" class="flex items-center gap-1">
              <strong class="truncate">홍길동</strong>
              <UiBadge variant="count" tone="default" size="sm">5</UiBadge>
            </p>
            <strong class="truncate" v-else>홍길동</strong>
            <span v-if="args.desc" class="data-list__desc">개발팀 · 사원</span>
          </div>
          <div v-if="args.rightColumn === '텍스트'" class="data-list__cont data-list__cont-right">
            <span>2024-01-15</span>
            <span v-if="args.desc" class="data-list__desc">등록일</span>
          </div>
          <UiBadge v-if="args.rightColumn === '상태배지'" variant="hold" class="self-start">예약중</UiBadge>
        </li>
        <li class="data-list__item" :class="args.clickable ? 'cursor-pointer hover:bg-surface-muted' : 'cursor-default'">
          <div class="data-list__cont data-list__cont-left">
            <p v-if="args.countBadge" class="flex items-center gap-1">
              <strong class="truncate">김철수</strong>
              <UiBadge variant="count" tone="default" size="sm">12</UiBadge>
            </p>
            <strong class="truncate" v-else>김철수</strong>
            <span v-if="args.desc" class="data-list__desc">디자인팀 · 대리</span>
          </div>
          <div v-if="args.rightColumn === '텍스트'" class="data-list__cont data-list__cont-right">
            <span>2024-03-22</span>
            <span v-if="args.desc" class="data-list__desc">등록일</span>
          </div>
        </li>
        <li class="data-list__item" :class="args.clickable ? 'cursor-pointer hover:bg-surface-muted' : 'cursor-default'">
          <div class="data-list__cont data-list__cont-left">
            <p v-if="args.countBadge" class="flex items-center gap-1">
              <strong class="truncate">이영희</strong>
              <UiBadge variant="count" tone="default" size="sm">999+</UiBadge>
            </p>
            <strong class="truncate" v-else>이영희</strong>
            <span v-if="args.desc" class="data-list__desc">기획팀 · 과장</span>
          </div>
          <div v-if="args.rightColumn === '텍스트'" class="data-list__cont data-list__cont-right">
            <span>2023-11-08</span>
            <span v-if="args.desc" class="data-list__desc">등록일</span>
          </div>
          <UiBadge v-if="args.rightColumn === '상태배지'" variant="hold" class="self-start">예약중</UiBadge>
        </li>
      </ul>
    \`
  })
}`,...(e=(t=s.parameters)==null?void 0:t.docs)==null?void 0:e.source}}};const c=["Default"];export{s as Default,c as __namedExportsOrder,l as default};
