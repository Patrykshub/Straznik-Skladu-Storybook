import{j as t,V as i,S as g,b as p,T as A,u as q,r as I,N as _}from"./iframe-CeXbqNbj.js";import{Q as B}from"./QuickVerdictReasons-DiAtdhf3.js";import{u as w}from"./useFormatMessage-BBXsXikr.js";import{t as W,B as V}from"./Button-CoYBz4qF.js";import"./preload-helper-Be4c81fI.js";import"./index-iIOtBEWB.js";import"./AntDesign-DgUNrSDB.js";const C=({children:e})=>t.jsx(i,{style:b.screen,children:t.jsx(i,{style:b.card,children:e})}),b=g.create({screen:{flex:1,backgroundColor:p.cream,paddingHorizontal:14,paddingVertical:12},card:{flex:1,backgroundColor:p.cream2,borderRadius:20,padding:16,overflow:"hidden"}});C.__docgenInfo={description:"",methods:[],displayName:"QuickVerdictHeroCard",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const M=({productName:e})=>e?t.jsx(i,{style:k.container,children:t.jsx(A,{style:k.text,numberOfLines:2,ellipsizeMode:"tail",children:e})}):null,k=g.create({container:{width:"100%",paddingVertical:12,paddingHorizontal:4,alignItems:"center"},text:{fontSize:16,color:p.bark,textAlign:"center",fontWeight:"600"}});M.__docgenInfo={description:"",methods:[],displayName:"QuickVerdictProductName",props:{productName:{required:!0,tsType:{name:"string"},description:""}}};const R=e=>{const n=e.replace(/^en:/,"").toLowerCase(),a=[n];n.split("-").filter(r=>r!=="tree"&&r.length>2).forEach(r=>{a.push(r)});const o=["nuts","nut","peanuts","peanut","almonds","almond","walnuts","walnut","cashews","cashew","hazelnuts","hazelnut","pistachios","pistachio","pecans","pecan","macadamias","macadamia","brazil","pine","chestnuts","chestnut"];return(n.includes("nut")||o.some(r=>n.includes(r)))&&o.forEach(r=>{a.includes(r)||a.push(r)}),a},j=e=>Array.from(new Set((e||[]).flat().map(n=>(typeof n=="string"?n:String(n))?.toLowerCase()).filter(Boolean).filter(n=>n.startsWith("en:")||n.includes(":")))),z=(e,n)=>n.length===0?!1:n.some(a=>{if(e===a)return!0;const s=R(e);return R(a).some(r=>s.some(u=>!!(u===r||u.includes(r)||r.includes(u))))}),Q=(e,n)=>{const a=q();return I.useMemo(()=>{if(!e||e.length===0)return[];const s=j(e),o=j(n);return[...s.map(l=>({code:l,isMatching:z(l,o)}))].sort((l,S)=>l.isMatching&&!S.isMatching?-1:!l.isMatching&&S.isMatching?1:l.code.localeCompare(S.code)).map(l=>({...l,translatedName:W(l.code,a.locale)}))},[e,n,a.locale])},P=({allergens:e,selectedAllergens:n})=>{const a=w("quickVerdict.allergens.warningMessage"),s=Q(e,n);return s.length===0?null:t.jsxs(i,{style:d.container,children:[t.jsx(A,{style:d.title,children:a}),t.jsx(i,{style:d.chips,children:s.map((o,r)=>t.jsx(i,{style:[d.chip,o.isMatching?d.chipDanger:d.chipNeutral],children:t.jsx(A,{style:[d.chipText,o.isMatching?d.chipTextDanger:d.chipTextNeutral],children:o.translatedName})},`${o.code}-${r}`))})]})},d=g.create({container:{paddingVertical:12},title:{fontSize:11,fontWeight:"600",color:p.bark2,textAlign:"center",marginBottom:8},chips:{flexDirection:"row",flexWrap:"wrap",justifyContent:"center",gap:6},chip:{paddingHorizontal:10,paddingVertical:5,borderRadius:20,minWidth:80,alignItems:"center"},chipDanger:{backgroundColor:p.rustMid},chipNeutral:{backgroundColor:p.sandLight},chipText:{fontSize:10,fontWeight:"600"},chipTextDanger:{color:"#712B13"},chipTextNeutral:{color:p.bark2}});P.__docgenInfo={description:"",methods:[],displayName:"AllergenAlert",props:{allergens:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},selectedAllergens:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const H=({onScanAnother:e,onTapHint:n})=>{const a=w("quickVerdict.tapHint"),s=w("quickVerdict.scanAnother");return t.jsxs(i,{style:N.container,children:[t.jsx(V,{style:N.button,variant:"secondary",text:s,onPress:e}),t.jsx(V,{style:N.button,variant:"primary",text:a,onPress:n})]})},N=g.create({container:{width:"100%",paddingTop:16,gap:12},button:{width:"100%"}});H.__docgenInfo={description:"",methods:[],displayName:"QuickVerdictBottomButtons",props:{onScanAnother:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onTapHint:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const v=({productName:e,reasons:n,reasonsText:a,allergensTags:s,selectedAllergens:o,onScanAnother:r,onTapHint:u})=>t.jsx(C,{children:t.jsxs(i,{style:m.container,children:[t.jsxs(_,{style:m.scrollView,contentContainerStyle:m.scrollContent,children:[t.jsx(M,{productName:e}),t.jsx(i,{style:m.reasonsStatsRow,children:t.jsx(B,{reasons:n})}),s&&t.jsx(P,{allergens:s,selectedAllergens:o})]}),t.jsx(i,{style:m.buttonsContainer,children:t.jsx(H,{onScanAnother:r,onTapHint:u})})]})}),m=g.create({container:{flex:1,width:"100%"},scrollView:{flex:1},scrollContent:{flexGrow:1,paddingBottom:16},verdictWrapper:{width:"100%",marginBottom:16},reasonsStatsRow:{flexDirection:"row",width:"100%",alignItems:"flex-start"},buttonsContainer:{paddingBottom:0,width:"100%"},column:{flex:1},dangerousSubstancesContainer:{marginTop:8,flexShrink:1},factorsContainer:{marginTop:8,width:"100%"},allergenContainer:{width:"50%",paddingHorizontal:24,marginTop:8,flexShrink:1}});v.__docgenInfo={description:"",methods:[],displayName:"QuickVerdictContent",props:{randomVariant:{required:!0,tsType:{name:"number"},description:""},productName:{required:!0,tsType:{name:"string"},description:""},productNameText:{required:!0,tsType:{name:"string"},description:""},reasons:{required:!0,tsType:{name:"Array",elements:[{name:"IVerdictReason"}],raw:"IVerdictReason[]"},description:""},reasonsText:{required:!0,tsType:{name:"string"},description:""},allergensTags:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},selectedAllergens:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onScanAnother:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onTapHint:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const{fn:c}=__STORYBOOK_MODULE_TEST__,U={title:"Result/QuickVerdictContent",component:v,decorators:[e=>t.jsx(i,{style:{flex:1,width:"100%"},children:t.jsx(e,{})})],argTypes:{randomVariant:{control:{type:"number",min:1,max:2}}}},h={args:{randomVariant:1,productName:"Organic Whole Wheat Bread",productNameText:"Product Name",reasons:[{text:"Sample good reason",type:"good"},{text:"Sample good reason",type:"good"},{text:"Sample good reason",type:"good"}],reasonsText:"Reasons",allergensTags:["en:gluten"],selectedAllergens:["en:gluten"],onScanAnother:c(),onTapHint:c()}},x={args:{randomVariant:1,productName:"Cereal Bar with Chocolate",productNameText:"Product Name",reasons:[{text:"Sample neutral reason",type:"neutral"},{text:"Sample neutral reason",type:"neutral"}],reasonsText:"Reasons",allergensTags:["en:milk","en:gluten"],selectedAllergens:["en:milk"],onScanAnother:c(),onTapHint:c()}},y={args:{randomVariant:1,productName:"Ultra-Processed Snack with Multiple Additives",productNameText:"Product Name",reasons:[{text:"Sample bad reason",type:"bad"},{text:"Sample bad reason",type:"bad"},{text:"Sample bad reason",type:"bad"}],reasonsText:"Reasons",allergensTags:["en:soybeans","en:milk","en:gluten","en:eggs","en:peanuts","en:tree-nuts","en:celery","en:mustard","en:sesame","en:sulphites","en:lupin","en:molluscs"],selectedAllergens:["en:soybeans","en:milk","en:gluten","en:eggs","en:peanuts","en:tree-nuts","en:celery","en:mustard","en:sesame","en:sulphites","en:lupin","en:molluscs"],onScanAnother:c(),onTapHint:c()}},T={args:{randomVariant:2,productName:"Processed Food Product",productNameText:"Product Name",reasons:[{text:"Sample bad reason",type:"bad"}],reasonsText:"Reasons",allergensTags:void 0,selectedAllergens:[],onScanAnother:c(),onTapHint:c()}},f={args:{randomVariant:2,productName:"Fresh Organic Apple",productNameText:"Product Name",reasons:[{text:"Sample good reason",type:"good"},{text:"Sample good reason",type:"good"},{text:"Sample good reason",type:"good"}],reasonsText:"Reasons",allergensTags:void 0,selectedAllergens:[],onScanAnother:c(),onTapHint:c()}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    randomVariant: 1,
    productName: "Organic Whole Wheat Bread",
    productNameText: "Product Name",
    reasons: [{
      text: "Sample good reason",
      type: "good"
    }, {
      text: "Sample good reason",
      type: "good"
    }, {
      text: "Sample good reason",
      type: "good"
    }] as IVerdictReason[],
    reasonsText: "Reasons",
    allergensTags: ["en:gluten"],
    selectedAllergens: ["en:gluten"],
    onScanAnother: fn(),
    onTapHint: fn()
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    randomVariant: 1,
    productName: "Cereal Bar with Chocolate",
    productNameText: "Product Name",
    reasons: [{
      text: "Sample neutral reason",
      type: "neutral"
    }, {
      text: "Sample neutral reason",
      type: "neutral"
    }] as IVerdictReason[],
    reasonsText: "Reasons",
    allergensTags: ["en:milk", "en:gluten"],
    selectedAllergens: ["en:milk"],
    onScanAnother: fn(),
    onTapHint: fn()
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    randomVariant: 1,
    productName: "Ultra-Processed Snack with Multiple Additives",
    productNameText: "Product Name",
    reasons: [{
      text: "Sample bad reason",
      type: "bad"
    }, {
      text: "Sample bad reason",
      type: "bad"
    }, {
      text: "Sample bad reason",
      type: "bad"
    }] as IVerdictReason[],
    reasonsText: "Reasons",
    allergensTags: ["en:soybeans", "en:milk", "en:gluten", "en:eggs", "en:peanuts", "en:tree-nuts", "en:celery", "en:mustard", "en:sesame", "en:sulphites", "en:lupin", "en:molluscs"],
    selectedAllergens: ["en:soybeans", "en:milk", "en:gluten", "en:eggs", "en:peanuts", "en:tree-nuts", "en:celery", "en:mustard", "en:sesame", "en:sulphites", "en:lupin", "en:molluscs"],
    onScanAnother: fn(),
    onTapHint: fn()
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    randomVariant: 2,
    productName: "Processed Food Product",
    productNameText: "Product Name",
    reasons: [{
      text: "Sample bad reason",
      type: "bad"
    }] as IVerdictReason[],
    reasonsText: "Reasons",
    allergensTags: undefined,
    selectedAllergens: [],
    onScanAnother: fn(),
    onTapHint: fn()
  }
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    randomVariant: 2,
    productName: "Fresh Organic Apple",
    productNameText: "Product Name",
    reasons: [{
      text: "Sample good reason",
      type: "good"
    }, {
      text: "Sample good reason",
      type: "good"
    }, {
      text: "Sample good reason",
      type: "good"
    }] as IVerdictReason[],
    reasonsText: "Reasons",
    allergensTags: undefined,
    selectedAllergens: [],
    onScanAnother: fn(),
    onTapHint: fn()
  }
}`,...f.parameters?.docs?.source}}};const K=["Good","Moderate","Avoid","WithDangerousSubstances","NoAllergens"];export{y as Avoid,h as Good,x as Moderate,f as NoAllergens,T as WithDangerousSubstances,K as __namedExportsOrder,U as default};
