import{w as e}from"./iframe-DqjGzl0i.js";import"./preload-helper-FI0fEOG2.js";const S={title:"기초/Badge",component:e,tags:["autodocs"],parameters:{docs:{subtitle:"개발 : variant(workflow) - 디자인 : Status Badge / 개발 : variant(active,inActive) - 디자인 : Active Badge",description:{component:"Badge는 상태(Status Badge)·활성 여부(Active Badge)·숫자·알림(count/dot) 용도로 쓰인다."}}},argTypes:{variant:{control:"select",options:["info","outline","process","accept","reject","hold","active","inActive"]},size:{control:"select",options:["count","default","dot"]}},args:{variant:"info",size:"default"}},a={render:w=>({components:{Badge:e},setup(){return{args:w}},template:'<Badge v-bind="args" >뱃지</Badge>'})},t={name:"Badge — status (workflow)",parameters:{docs:{description:{story:"진행 단계가 있는 워크플로우 상태 표시. 6단계 색상으로 고정, indicator(dot)는 쓰지 않는다 — Figma Status Badge 스펙."}}},render:()=>({components:{Badge:e},template:`
      <div class="flex flex-wrap gap-2 items-center">
        <Badge variant="outline">시작/미진행</Badge>
        <Badge variant="process">처리중/진행중</Badge>
        <Badge variant="accept">승인/완료</Badge>
        <Badge variant="reject">반려</Badge>
        <Badge variant="hold">보류</Badge>
        <Badge variant="info">정보</Badge>
      </div>
    `})},s={name:"Badge — status (active)",parameters:{docs:{description:{story:"단계 없이 두 값만 오가는 이진 상태 표시(사용/미사용 등). 배경·테두리는 항상 중립으로 고정하고, 앞에 붙는 dot 색으로만 active/inActive를 구분한다 — Figma Active Badge 스펙."}}},render:()=>({components:{Badge:e},template:`
      <div class="flex flex-wrap gap-2 items-center">
        <Badge variant="active">활성 상태</Badge>
        <Badge variant="inActive">비활성 상태</Badge>
      </div>
    `})},r={name:"Badge — count (알림 수)",parameters:{docs:{description:{story:"숫자 강조용. 탭·리스트 옆에 미확인 개수 등을 표시할 때 사용."}}},render:()=>({components:{Badge:e},template:`
      <div class="flex gap-3 items-center">
        <Badge size="count">3</Badge>
        <Badge size="count" class="bg-danger text-neutral">12</Badge>
        <Badge size="count" class="bg-danger text-neutral"><LucideThumbsDown />999+</Badge>
      </div>
    `})},d={name:"Badge — dot (알림 표시)",parameters:{docs:{description:{story:"텍스트 없이 점 하나로만 표시하는 단순 알림 인디케이터. 아이콘 위 배지 등 공간이 좁은 곳에 사용."}}},render:()=>({components:{Badge:e},template:`
      <div class="flex gap-3 items-center">
        <Badge size="dot" class="bg-danger" />
        <Badge size="dot" class="bg-success" />
        <Badge size="dot" class="bg-primary" />
      </div>
    `})};var n,o,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Badge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<Badge v-bind="args" >뱃지</Badge>\`
  })
}`,...(c=(o=a.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var i,g,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Badge — status (workflow)',
  parameters: {
    docs: {
      description: {
        story: '진행 단계가 있는 워크플로우 상태 표시. 6단계 색상으로 고정, indicator(dot)는 쓰지 않는다 — Figma Status Badge 스펙.'
      }
    }
  },
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex flex-wrap gap-2 items-center">
        <Badge variant="outline">시작/미진행</Badge>
        <Badge variant="process">처리중/진행중</Badge>
        <Badge variant="accept">승인/완료</Badge>
        <Badge variant="reject">반려</Badge>
        <Badge variant="hold">보류</Badge>
        <Badge variant="info">정보</Badge>
      </div>
    \`
  })
}`,...(p=(g=t.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var B,m,l;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Badge — status (active)',
  parameters: {
    docs: {
      description: {
        story: '단계 없이 두 값만 오가는 이진 상태 표시(사용/미사용 등). 배경·테두리는 항상 중립으로 고정하고, 앞에 붙는 dot 색으로만 active/inActive를 구분한다 — Figma Active Badge 스펙.'
      }
    }
  },
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex flex-wrap gap-2 items-center">
        <Badge variant="active">활성 상태</Badge>
        <Badge variant="inActive">비활성 상태</Badge>
      </div>
    \`
  })
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var u,v,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Badge — count (알림 수)',
  parameters: {
    docs: {
      description: {
        story: '숫자 강조용. 탭·리스트 옆에 미확인 개수 등을 표시할 때 사용.'
      }
    }
  },
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex gap-3 items-center">
        <Badge size="count">3</Badge>
        <Badge size="count" class="bg-danger text-neutral">12</Badge>
        <Badge size="count" class="bg-danger text-neutral"><LucideThumbsDown />999+</Badge>
      </div>
    \`
  })
}`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var x,b,z;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Badge — dot (알림 표시)',
  parameters: {
    docs: {
      description: {
        story: '텍스트 없이 점 하나로만 표시하는 단순 알림 인디케이터. 아이콘 위 배지 등 공간이 좁은 곳에 사용.'
      }
    }
  },
  render: () => ({
    components: {
      Badge
    },
    template: \`
      <div class="flex gap-3 items-center">
        <Badge size="dot" class="bg-danger" />
        <Badge size="dot" class="bg-success" />
        <Badge size="dot" class="bg-primary" />
      </div>
    \`
  })
}`,...(z=(b=d.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};const V=["Default","StatusVariants","ActiveVariants","CountVariant","DotVariant"];export{s as ActiveVariants,r as CountVariant,a as Default,d as DotVariant,t as StatusVariants,V as __namedExportsOrder,S as default};
