function test(string){return(string||'').replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g,
    '\\$1'
  )
}
