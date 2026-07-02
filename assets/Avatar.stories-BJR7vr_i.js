import{a as e}from"./avatar-default-8NlzZuuD.js";import{_ as u}from"./logo-uj_DKnwi.js";const g={title:"기초/Avatar",tags:["autodocs","done"],parameters:{layout:"centered"}},a={name:"Avatar — 이미지",render:()=>({setup(){return{logoSrc:u,avatarDefault:e}},template:`
      <div class="flex items-center gap-4">
        <UiAvatar>
          <UiAvatarImage :src="logoSrc" alt="user" />
          <UiAvatarFallback>
            <img :src="avatarDefault" alt="avatar" class="size-full" />
          </UiAvatarFallback>
        </UiAvatar>
      </div>
    `})},t={name:"Avatar — 폴백 (이미지 없음)",render:()=>({setup(){return{avatarDefault:e}},template:`
      <div class="flex items-center gap-4">
        <UiAvatar>
          <UiAvatarImage src="/broken-url" alt="user" />
          <UiAvatarFallback>
            <img :src="avatarDefault" alt="avatar" class="size-full" />
          </UiAvatarFallback>
        </UiAvatar>
      </div>
    `})},r={name:"Avatar — 사이즈",render:()=>({setup(){return{avatarDefault:e,logoSrc:u}},template:`
      <div class="flex items-end gap-4">
        <div class="flex flex-col items-center gap-2">
          <UiAvatar class="size-6">
            <UiAvatarImage :src="logoSrc" alt="user" />
            <UiAvatarFallback><img :src="avatarDefault" alt="avatar" class="size-full" /></UiAvatarFallback>
          </UiAvatar>
          <span class="caption text-muted">sm · 24px</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <UiAvatar class="size-10">
            <UiAvatarImage :src="logoSrc" alt="user" />
            <UiAvatarFallback><img :src="avatarDefault" alt="avatar" class="size-full" /></UiAvatarFallback>
          </UiAvatar>
          <span class="caption text-muted">md · 40px</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <UiAvatar class="size-20">
            <UiAvatarImage :src="logoSrc" alt="user" />
            <UiAvatarFallback><img :src="avatarDefault" alt="avatar" class="size-full" /></UiAvatarFallback>
          </UiAvatar>
          <span class="caption text-muted">lg · 80px</span>
        </div>
      </div>
    `})};var s,l,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: 'Avatar — 이미지',
  render: () => ({
    setup() {
      return {
        logoSrc,
        avatarDefault
      };
    },
    template: \`
      <div class="flex items-center gap-4">
        <UiAvatar>
          <UiAvatarImage :src="logoSrc" alt="user" />
          <UiAvatarFallback>
            <img :src="avatarDefault" alt="avatar" class="size-full" />
          </UiAvatarFallback>
        </UiAvatar>
      </div>
    \`
  })
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var n,i,v;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Avatar — 폴백 (이미지 없음)',
  render: () => ({
    setup() {
      return {
        avatarDefault
      };
    },
    template: \`
      <div class="flex items-center gap-4">
        <UiAvatar>
          <UiAvatarImage src="/broken-url" alt="user" />
          <UiAvatarFallback>
            <img :src="avatarDefault" alt="avatar" class="size-full" />
          </UiAvatarFallback>
        </UiAvatar>
      </div>
    \`
  })
}`,...(v=(i=t.parameters)==null?void 0:i.docs)==null?void 0:v.source}}};var m,o,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Avatar — 사이즈',
  render: () => ({
    setup() {
      return {
        avatarDefault,
        logoSrc
      };
    },
    template: \`
      <div class="flex items-end gap-4">
        <div class="flex flex-col items-center gap-2">
          <UiAvatar class="size-6">
            <UiAvatarImage :src="logoSrc" alt="user" />
            <UiAvatarFallback><img :src="avatarDefault" alt="avatar" class="size-full" /></UiAvatarFallback>
          </UiAvatar>
          <span class="caption text-muted">sm · 24px</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <UiAvatar class="size-10">
            <UiAvatarImage :src="logoSrc" alt="user" />
            <UiAvatarFallback><img :src="avatarDefault" alt="avatar" class="size-full" /></UiAvatarFallback>
          </UiAvatar>
          <span class="caption text-muted">md · 40px</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <UiAvatar class="size-20">
            <UiAvatarImage :src="logoSrc" alt="user" />
            <UiAvatarFallback><img :src="avatarDefault" alt="avatar" class="size-full" /></UiAvatarFallback>
          </UiAvatar>
          <span class="caption text-muted">lg · 80px</span>
        </div>
      </div>
    \`
  })
}`,...(p=(o=r.parameters)==null?void 0:o.docs)==null?void 0:p.source}}};const U=["WithImage","Fallback","Sizes"];export{t as Fallback,r as Sizes,a as WithImage,U as __namedExportsOrder,g as default};
