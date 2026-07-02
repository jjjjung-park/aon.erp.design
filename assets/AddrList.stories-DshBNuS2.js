const t={title:"UI 패턴/리스트/AddrList",tags:["autodocs","done"],parameters:{layout:"centered"}},s={name:"기본",render:()=>({template:`
      <ul class="w-120 px-6">
        <li class="addr-list">
            <div class="border-b-1 border-border mx-6 pt-4 pb-6  grid gap-3 ">
              <p class="title__bold text-primary">04778</p>
              <div class="grid gap-2">
                <dl class="flex items-start gap-3">
                  <!--   도로명, 지번 구분 badge -> tags로 컴포넌트 변경     -->
                  <dt class="addr-list__type"><Tags variant="outline">도로명</Tags></dt>
                  <dd class="">
                    <ul>
                      <li class="addr-list__item ">
                        서울특별시 성동구 아차산로 12 (성수동 1가, 한국방송통신대학교 서울지역대학)
                      </li>
                    </ul>
                    <p></p>
                  </dd>
                </dl>
                <dl class="flex items-start gap-3">
                  <dt class="addr-list__type"><Tags variant="outline">지번</Tags></dt>
                  <dd class="">
                    <p class="caption text-muted mb-2">아래 목록에서 정확한 지번 주소를 선택 해 주세요.<br>
                      잘 모르시는 경우 ‘선택 안함'을 클릭 해 주세요.</p>
                    <ul class="grid gap-2">
                      <li class="addr-list__item">
                        지번 주소 선택 안함
                      </li>
                      <li class="addr-list__item">
                        서울특별시 성동구 성수동 1가 000-000
                      </li>
                      <li class="addr-list__item">
                        서울특별시 성동구 성수동 1가 000-000
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </li>
      </ul>
    `})};var a,l,d;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '기본',
  render: () => ({
    template: \`
      <ul class="w-120 px-6">
        <li class="addr-list">
            <div class="border-b-1 border-border mx-6 pt-4 pb-6  grid gap-3 ">
              <p class="title__bold text-primary">04778</p>
              <div class="grid gap-2">
                <dl class="flex items-start gap-3">
                  <!--   도로명, 지번 구분 badge -> tags로 컴포넌트 변경     -->
                  <dt class="addr-list__type"><Tags variant="outline">도로명</Tags></dt>
                  <dd class="">
                    <ul>
                      <li class="addr-list__item ">
                        서울특별시 성동구 아차산로 12 (성수동 1가, 한국방송통신대학교 서울지역대학)
                      </li>
                    </ul>
                    <p></p>
                  </dd>
                </dl>
                <dl class="flex items-start gap-3">
                  <dt class="addr-list__type"><Tags variant="outline">지번</Tags></dt>
                  <dd class="">
                    <p class="caption text-muted mb-2">아래 목록에서 정확한 지번 주소를 선택 해 주세요.<br>
                      잘 모르시는 경우 ‘선택 안함'을 클릭 해 주세요.</p>
                    <ul class="grid gap-2">
                      <li class="addr-list__item">
                        지번 주소 선택 안함
                      </li>
                      <li class="addr-list__item">
                        서울특별시 성동구 성수동 1가 000-000
                      </li>
                      <li class="addr-list__item">
                        서울특별시 성동구 성수동 1가 000-000
                      </li>
                    </ul>
                  </dd>
                </dl>
              </div>
            </div>
          </li>
      </ul>
    \`
  })
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const i=["Default"];export{s as Default,i as __namedExportsOrder,t as default};
