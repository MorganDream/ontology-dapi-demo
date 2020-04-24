import { client } from '@ont-dev/ontology-dapi';
import arrayMutators from 'final-form-arrays';
import * as React from 'react';
import { Field, Form } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import { RouterProps } from 'react-router';

export const FS: React.SFC<RouterProps> = (props) => {
  async function onGetNodeInfo(values: any) {
    try {
      const result = await client.api.fs!.getNodeInfo({
        nodeWallet: values.address
      });
      alert('onGetNodeInfo: ' + JSON.stringify(result));
    } catch (e) {
      alert('onGetNodeInfo Error: ' + JSON.stringify(e));
    }
  }

  async function onStoreFile(values: any) {
    try {
      const result = await client.api.fs!.storeFiles(values);
      alert('onStoreFile: ' + JSON.stringify(result));
    } catch (e) {
      alert('onStoreFile Error: ' + JSON.stringify(e));
    }
  }

  async function onCreateSpace(values: any) {
    // tslint:disable-next-line: no-console
    console.log(values);
    try {
      const result = await client.api.fs!.space.create(values);
      alert('onCreateSpace: ' + JSON.stringify(result));
    } catch (e) {
      alert('onCreateSpace Error: ' + JSON.stringify(e));
    }
  }

  async function onDeleteSpace(values: any) {
    try {
      const result = await client.api.fs!.space.delete(values);
      alert('onDeleteSpace: ' + JSON.stringify(result));
    } catch (e) {
      alert('onDeleteSpace Error: ' + JSON.stringify(e));
    }
  }

  async function onUpdateSpace(values: any) {
    try {
      const result = await client.api.fs!.space.update(values);
      alert('onUpdateSpace: ' + JSON.stringify(result));
    } catch (e) {
      alert('onUpdateSpace Error: ' + JSON.stringify(e));
    }
  }

  async function onGetSpace() {
    try {
      const result = await client.api.fs!.space.get();
      alert('onGetSpace: ' + JSON.stringify(result));
    } catch (e) {
      alert('onGetSpace Error: ' + JSON.stringify(e));
    }
  }

  // async function onRegisterNode(values: any) {
  //   try {
  //     const result = await client.api.fs!.node.register(values);
  //     alert('onRegisterNode: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onRegisterNode Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onQueryNode(values: any) {
  //   try {
  //     const result = await client.api.fs!.node.query(values);
  //     alert('onQueryNode: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onQueryNode Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onUpdateNode(values: any) {
  //   try {
  //     const result = await client.api.fs!.node.update(values);
  //     alert('onUpdateNode: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onUpdateNode Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onCancelNode() {
  //   try {
  //     const result = await client.api.fs!.node.cancel();
  //     alert('onCancelNode: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onCancelNode Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onNodeDrawProfit() {
  //   try {
  //     const result = await client.api.fs!.node.drawProfit();
  //     alert('onNodeDrawProfit: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onNodeDrawProfit Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onNodeFileProve(values: any) {
  //   try {
  //     const result = await client.api.fs!.node.fileProve(values);
  //     alert('onNodeFileProve: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onNodeFileProve Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onFileReadProfitSettle(values: any) {
  //   try {
  //     const result = await client.api.fs!.fileReadProfitSettle({
  //       fileReadSettleSlice: values
  //     });
  //     alert('onFileReadProfitSettle: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onFileReadProfitSettle Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onVerifyFileReadProfitSettleSlice(values: any) {
  //   try {
  //     const result = await client.api.fs!.verifyFileReadSettleSlice({
  //       settleSlice: values
  //     });
  //     alert('onVerifyFileReadProfitSettleSlice: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onVerifyFileReadProfitSettleSlice Error: ' + JSON.stringify(e));
  //   }
  // }

  async function onGetNodeInfoList(values: any) {
    try {
      const result = await client.api.fs!.getNodeInfoList(values);
      alert('onGetNodeInfoList: ' + JSON.stringify(result));
    } catch (e) {
      alert('onGetNodeInfoList Error: ' + JSON.stringify(e));
    }
  }

  // async function onGetFileReadPledge(values: any) {
  //   try {
  //     const result = await client.api.fs!.getFileReadPledge(values);
  //     alert('onGetFileReadPledge: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onGetFileReadPledge Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onGetFilePdpRecordList(values: any) {
  //   try {
  //     const result = await client.api.fs!.getFilePdpRecordList(values);
  //     alert('onGetFilePdpRecordList: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onGetFilePdpRecordList Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onGetChallenge(values: any) {
  //   try {
  //     const result = await client.api.fs!.getChallenge(values);
  //     alert('onGetChallenge: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onGetChallenge Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onGetFileChallengeList(values: any) {
  //   try {
  //     const result = await client.api.fs!.getFileChallengeList(values);
  //     alert('onGetFileChallengeList: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onGetFileChallengeList Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onGetNodeChallengeList() {
  //   try {
  //     const result = await client.api.fs!.getNodeChallengeList();
  //     alert('onGetNodeChallengeList: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onGetNodeChallengeList Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onGetFileInfo(values: any) {
  //   try {
  //     const result = await client.api.fs!.getFileInfo(values);
  //     alert('onGetFileInfo: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onGetFileInfo Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onGetFileList() {
  //   try {
  //     const result = await client.api.fs!.getFileList();
  //     alert('onGetFileList: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onGetFileList Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onChallenge(values: any) {
  //   try {
  //     const result = await client.api.fs!.chanllenge(values);
  //     alert('onChallenge: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onChallenge Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onTransferFiles(values: any) {
  //   try {
  //     const result = await client.api.fs!.transferFiles(values);
  //     alert('onTransferFiles: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onTransferFiles Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onRenewFiles(values: any) {
  //   try {
  //     const result = await client.api.fs!.renewFiles(values);
  //     alert('onRenewFiles: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onRenewFiles Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onDeleteFiles(values: any) {
  //   try {
  //     const result = await client.api.fs!.deleteFiles(values);
  //     alert('onDeleteFiles: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onDeleteFiles Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onFileReadPledge(values: any) {
  //   try {
  //     const result = await client.api.fs!.fileReadPledge(values);
  //     alert('onFileReadPledge: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onFileReadPledge Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onCancelFileRead(values: any) {
  //   try {
  //     const result = await client.api.fs!.cancelFileRead(values);
  //     alert('onCancelFileRead: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onCancelFileRead Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onResponse(values: any) {
  //   try {
  //     const result = await client.api.fs!.response(values);
  //     alert('onResponse: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onResponse Error: ' + JSON.stringify(e));
  //   }
  // }

  // async function onJudge(values: any) {
  //   try {
  //     const result = await client.api.fs!.judge(values);
  //     alert('onJudge: ' + JSON.stringify(result));
  //   } catch (e) {
  //     alert('onJudge Error: ' + JSON.stringify(e));
  //   }
  // }

  async function onGenFileReadSettleSlice(values: any) {
    try {
      const result = await client.api.fs!.genFileReadSettleSlice(values);
      alert('onGenFileReadSettleSlice: ' + JSON.stringify(result));
    } catch (e) {
      alert('onGenFileReadSettleSlice Error: ' + JSON.stringify(e));
    }
  }

  function onBack() {
    props.history.goBack();
  }

  return (
    <div>
      <h2>Create Space</h2>
      <Form
        initialValues={{
          volume: 100,
          copyNumber: 2,
          pdpInterval: 600,
          timeExpired: new Date(),
          gasPrice: '500',
          gasLimit: '100000000'
        }}
        onSubmit={onCreateSpace}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label >Volume(kb)</label>
            <Field name="volume" component="input" type="number" parse={(value) => Number(value)}/>
            <label>Copy Number</label>
            <Field name="copyNumber" component="input" type="number"  parse={(value) => Number(value)}/>
            <label>Pdp Interval(second)</label>
            <Field name="pdpInterval" component="input" type="number"  parse={(value) => Number(value)}/>
            <label>Time Expired</label>
            <Field name="timeExpired" component="input" type="datetime-local"/>
            <h4>Gas price</h4>
            <Field name="gasPrice" component="input" type="number" />
            <h4>Gas limit</h4>
            <Field name="gasLimit" component="input" type="number" />

            <br />
            <br />
            <button type="submit">Create Space</button>
          </form>
        )}
      />
      <hr />

      <h2>Delete Space</h2>
      <Form
        initialValues={{
          gasPrice: '500',
          gasLimit: '100000000'
        }}
        onSubmit={onDeleteSpace}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h4>Gas price</h4>
            <Field name="gasPrice" component="input" type="number" />
            <h4>Gas limit</h4>
            <Field name="gasLimit" component="input" type="number" />

            <br />
            <br />
            <button type="submit">Delete Space</button>
          </form>
        )}
      />
      <hr />

      <h2>Update Space</h2>
      <Form
        initialValues={{
          volume: 100,
          timeExpired: new Date(),
          gasPrice: '500',
          gasLimit: '100000000'
        }}
        onSubmit={onUpdateSpace}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label >Volume</label>
            <Field name="volume" component="input" type="number"  parse={(value) => Number(value)}/>
            <label>Time Expired</label>
            <Field name="timeExpired" component="input" type="datetime-local"/>
            <h4>Gas price</h4>
            <Field name="gasPrice" component="input" type="number" />
            <h4>Gas limit</h4>
            <Field name="gasLimit" component="input" type="number" />

            <br />
            <br />
            <button type="submit">Update Space</button>
          </form>
        )}
      />
      <hr />

      <h2>Get Space</h2>
      <button onClick={onGetSpace}>Get Space</button>
      <hr />

      {/* <h2>Node Register</h2>
      <Form
        initialValues={{
          volume: 100,
          serviceTime: 100,
          minPdpInterval: 600,
          nodeNetAddr: 'https//:node.net.addr'
        }}
        onSubmit={onRegisterNode}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label >Volume</label>
            <Field name="volume" component="input" type="number"  parse={(value) => Number(value)}/>
            <label >Service Time</label>
            <Field name="serviceTime" component="input" type="number"  parse={(value) => Number(value)}/>
            <label >Volume</label>
            <Field name="minPdpInterval" component="input" type="number"  parse={(value) => Number(value)}/>
            <label>Time Expired</label>
            <Field name="nodeNetAddr" component="textarea" type="text"/>

            <br />
            <br />
            <button type="submit">Update Space</button>
          </form>
        )}
      />
      <hr />

      <h2>Node Query</h2>
      <Form
        initialValues={{
          nodeWallet: 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns'
        }}
        onSubmit={onQueryNode}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h4>Node Address</h4>
            <Field name="nodeWallet" component="textarea"/>

            <br />
            <br />
            <button type="submit">Query Node Info</button>
          </form>
        )}
      />
      <hr />

      <h2>Node Update</h2>
      <Form
        initialValues={{
          volume: 100,
          serviceTime: 100,
          minPdpInterval: 600,
          nodeNetAddr: 'https//:node.net.addr'
        }}
        onSubmit={onUpdateNode}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label >Volume</label>
            <Field name="volume" component="input" type="number"  parse={(value) => Number(value)}/>
            <label >Service Time</label>
            <Field name="serviceTime" component="input" type="number"  parse={(value) => Number(value)}/>
            <label >Volume</label>
            <Field name="minPdpInterval" component="input" type="number"  parse={(value) => Number(value)}/>
            <label>Time Expired</label>
            <Field name="nodeNetAddr" component="textarea" type="text"/>

            <br />
            <br />
            <button type="submit">Update Node Info</button>
          </form>
        )}
      />
      <hr />

      <h2>Node Cancel</h2>
      <button onClick={onCancelNode}>Cancel Node</button>
      <hr />

      <h2>Node Draw Profit</h2>
      <button onClick={onNodeDrawProfit}>Node Draw Profit</button>
      <hr />

      <h2>Node File Prove</h2>
      <Form
        initialValues={{
          fileHash: 'abcdef',
          proveData: 'abcdefabcdef',
          blockHeight: 100
        }}
        onSubmit={onNodeFileProve}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label >File Hash in Hex</label>
            <Field name="fileHash" component="textarea" type="text"/>
            <label >Prove Data</label>
            <Field name="proveData" component="textarea" type="text"/>
            <label >Block Height</label>
            <Field name="blockHeight" component="input" type="number"  parse={(value) => Number(value)}/>

            <br />
            <br />
            <button type="submit">Node File Prove</button>
          </form>
        )}
      />
      <hr /> */}

      {/* <h2>File Read Profit Settle</h2>
      <Form
        initialValues={{
          fileHash: 'abcde1',
          payFrom: 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns',
          payTo: 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns',
          sliceId: 1,
          pledgeHeight: 100,
          signature: '',
          publicKey: ''
        }}
        onSubmit={onFileReadProfitSettle}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>File Hash Hex</label>
            <Field name="fileHash" component="textarea"/>
            <label>Pay From</label>
            <Field name="payFrom" component="textarea"/>
            <label>Pay To</label>
            <Field name="payTo" component="textarea"/>
            <label>Slice ID</label>
            <Field name="sliceId" component="input" type="number"  parse={(value) => Number(value)}/>
            <label>Pledge Height</label>
            <Field name="pledgeHeight" component="input" type="number"  parse={(value) => Number(value)}/>
            <label>Signature</label>
            <Field name="signature" component="textarea"/>
            <label>PublicKey</label>
            <Field name="publicKey" component="textarea"/>

            <br />
            <br />
            <button type="submit">Settle</button>
          </form>
        )}
      />
      <hr /> */}

      {/* <h2>Verify File Read Settle Slice</h2>
      <Form
        initialValues={{
          fileHash: 'abcde1',
          payFrom: 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns',
          payTo: 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns',
          sliceId: 1,
          pledgeHeight: 100,
          signature: '',
          publicKey: ''
        }}
        onSubmit={onVerifyFileReadProfitSettleSlice}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>File Hash Hex</label>
            <Field name="fileHash" component="textarea"/>
            <label>Pay From</label>
            <Field name="payFrom" component="textarea"/>
            <label>Pay To</label>
            <Field name="payTo" component="textarea"/>
            <label>Slice ID</label>
            <Field name="sliceId" component="input" type="number"  parse={(value) => Number(value)}/>
            <label>Pledge Height</label>
            <Field name="pledgeHeight" component="input" type="number"  parse={(value) => Number(value)}/>
            <label>Signature</label>
            <Field name="signature" component="textarea"/>
            <label>PublicKey</label>
            <Field name="publicKey" component="textarea"/>

            <br />
            <br />
            <button type="submit">Verify</button>
          </form>
        )}
      />
      <hr /> */}

      <h2>Get Node Info</h2>
      <Form
        initialValues={{
          address: 'AYuPXGQiRuBBBBLPSaDYA8B4vuFENB4K4A'
        }}
        onSubmit={onGetNodeInfo}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h4>Node Address</h4>
            <Field name="address" component="textarea"/>

            <br />
            <br />
            <button type="submit">Get Node Info</button>
          </form>
        )}
      />
      <hr />

      <h2>Get Node Info List</h2>
      <Form
        initialValues={{
          count: 2
        }}
        onSubmit={onGetNodeInfoList}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h4>Count</h4>
            <Field name="count" component="input" type="number"  parse={(value) => Number(value)}/>

            <br />
            <br />
            <button type="submit">Get Node Info List</button>
          </form>
        )}
      />
      <hr />

      {/* <h2>Get File Read Pledge</h2>
      <Form
        initialValues={{
          fileHash: 'abcdef',
          downloader: 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns'
        }}
        onSubmit={onGetFileReadPledge}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>File Hash Hex</label>
            <Field name="fileHash" component="textarea" />
            <label>Downloader Address</label>
            <Field name="downloader" component="textarea" />

            <br />
            <br />
            <button type="submit">Get</button>
          </form>
        )}
      />
      <hr /> */}

      {/* <h2>Get File pdp record list</h2>
      <Form
        initialValues={{
          fileHash: 'abcdef'
        }}
        onSubmit={onGetFilePdpRecordList}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>File Hash Hex</label>
            <Field name="fileHash" component="textarea" />

            <br />
            <br />
            <button type="submit">Get</button>
          </form>
        )}
      />
      <hr /> */}

      {/* <h2>Get Challenge</h2>
      <Form
        initialValues={{
          fileHash: 'abcdef',
          nodeAddr: 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns'
        }}
        onSubmit={onGetChallenge}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>File Hash Hex</label>
            <Field name="fileHash" component="textarea" />
            <label>Node Address</label>
            <Field name="nodeAddr" component="textarea" />

            <br />
            <br />
            <button type="submit">Get</button>
          </form>
        )}
      />
      <hr /> */}

      {/* <h2>Get File Challenge List</h2>
      <Form
        initialValues={{
          fileHash: 'abcdef'
        }}
        onSubmit={onGetFileChallengeList}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>File Hash Hex</label>
            <Field name="fileHash" component="textarea" />

            <br />
            <br />
            <button type="submit">Get</button>
          </form>
        )}
      />
      <hr /> */}

      {/* <h2>Get Node Challenge List</h2>
        <button onClick={onGetNodeChallengeList}>Get</button>
      <hr /> */}

      {/* <h2>Get File Info</h2>
      <Form
        initialValues={{
          fileHash: 'abcdef'
        }}
        onSubmit={onGetFileInfo}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>File Hash Hex</label>
            <Field name="fileHash" component="textarea" />

            <br />
            <br />
            <button type="submit">Get</button>
          </form>
        )}
      />
      <hr /> */}

      <h2>Store Files</h2>
      <Form
        mutators={Object.assign({}, arrayMutators) as any}
        initialValues={{
          filesInfo: [{
            fileHash: 'abcdef',
            fileDesc: 'This is a test file',
            fileBlockCount: 1,
            realFileSize: 10,
            copyNumber: 1,
            firstPdp: true,
            pdpInterval: 600,
            timeExpired: new Date(),
            pdpParam: '12ac34',
            storageType: 1
          }],
          gasPrice: '500',
          gasLimit: '100000000'
        }}
        onSubmit={onStoreFile}
        render={({
          form: {
            mutators: { push }
          },
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <h4>File Info Array</h4>
            <button type="button" onClick={() => push('filesInfo',
              {
                fileHash: 'abcdef',
                fileDesc: 'This is a test file',
                fileBlockCount: 1,
                realFileSize: 10,
                copyNumber: 1,
                firstPdp: true,
                pdpInterval: 600,
                timeExpired: new Date(),
                pdpParam: '12ac34',
                storageType: 1
              }
            )
            }>
              Add File Hashes to Delete
            </button>
            <FieldArray name="filesInfo">
              {({ fields }) =>
                fields.map((name, index) => (
                  <div key={index}>
                    <label>File Hash in Hex</label>
                    <Field name={`${name}.fileHash`} component="textarea"/>
                    <label>File Description</label>
                    <Field name={`${name}.fileDesc`} component="textarea"/>
                    <label>File Block Count</label>
                    <Field name={`${name}.fileBlockCount`}
                      component="input" type="number"  parse={(value) => Number(value)}/>
                    <label>Real File Size(kb)</label>
                    <Field name={`${name}.realFileSize`}
                      component="input" type="number"  parse={(value) => Number(value)}/>
                    <label>Copy Number</label>
                    <Field name={`${name}.copyNumber`}
                      component="input" type="number"  parse={(value) => Number(value)}/>
                    <label>firstPdp</label>
                    <Field name={`${name}.firstPdp`} component="input" type="checkbox"/>
                    <label>pdpInterval(at least 600s)</label>
                    <Field name={`${name}.pdpInterval`}
                      component="input" type="number"  parse={(value) => Number(value)}/>
                    <label>Time Expired</label>
                    <Field name={`${name}.timeExpired`} component="input" type="datetime-local"/>
                    <label>Pdp Param</label>
                    <Field name={`${name}.pdpParam`} component="textarea"/>
                    <label>Storage Type</label>
                    <Field name={`${name}.storageType`}
                      component="input" type="number"  parse={(value) => Number(value)}/>
                    <span onClick={() => fields.remove(index)} style={{ cursor: 'pointer' }}>
                      ❌
                    </span>
                  </div>
                ))
              }
            </FieldArray>
            <h4>Gas price</h4>
            <Field name="gasPrice" component="input" type="number" />
            <h4>Gas limit</h4>
            <Field name="gasLimit" component="input" type="number" />

            <br />
            <br />
            <button type="submit">Store File</button>
          </form>
        )}
      />
      <hr />

      {/* <h2>Get File List</h2>
      <button onClick={onGetFileList}>Get</button>
      <hr /> */}

      {/* <h2>Challenge</h2>
      <Form
        initialValues={{
          fileHash: 'abcdef',
          nodeAddr: 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns',
          gasPrice: '500',
          gasLimit: '100000000'
        }}
        onSubmit={onChallenge}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>File Hash Hex</label>
            <Field name="fileHash" component="textarea" />
            <label>Node Address</label>
            <Field name="nodeAddr" component="textarea" />
            <h4>Gas price</h4>
            <Field name="gasPrice" component="input" type="number" />
            <h4>Gas limit</h4>
            <Field name="gasLimit" component="input" type="number" />

            <br />
            <br />
            <button type="submit">Challenge</button>
          </form>
        )}
      />
      <hr /> */}

      {/* <h2>Delete Files</h2>
      <Form
        initialValues={{
          fileHashes: ['abcdef'],
          gasPrice: '500',
          gasLimit: '100000000'
        }}
        mutators={Object.assign({}, arrayMutators) as any}
        onSubmit={onDeleteFiles}
        render={({
          form: {
            mutators: { push }
          },
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <h4>File Hashes to Delete</h4>
            <button type="button" onClick={() => push('fileHashes', '')}>
              Add File Hashes to Delete
            </button>
            <FieldArray name="fileHashes">
              {({ fields }) =>
                fields.map((hash, index) => (
                  <div key={index}>
                    <label>File Hash Hex</label>
                    <Field name={hash} component="textarea" />
                    <span onClick={() => fields.remove(index)} style={{ cursor: 'pointer' }}>
                      ❌
                    </span>
                  </div>
                ))
              }
            </FieldArray>
            <h4>Gas price</h4>
            <Field name="gasPrice" component="input" type="number" />
            <h4>Gas limit</h4>
            <Field name="gasLimit" component="input" type="number" />

            <br />
            <br />
            <button type="submit">Delete</button>
          </form>
        )}
      />
      <hr /> */}

      {/* <h2>Transfer Files</h2>
      <Form
        initialValues={{
          fileTransfers: [{
            fileHash: 'abcdef',
            newOwner: 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns'
          }],
          gasPrice: '500',
          gasLimit: '100000000'
        }}
        mutators={Object.assign({}, arrayMutators) as any}
        onSubmit={onTransferFiles}
        render={({
          form: {
            mutators: { push }
          },
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <h4>File Transfers</h4>
            <button type="button" onClick={() => push('fileTransfers', { fileHash: '', newOwner: '' })}>
              Add File Transfer
            </button>
            <FieldArray name="fileTransfers">
              {({ fields }) =>
                fields.map((name, index) => (
                  <div key={index}>
                    <label>File Hash Hex</label>
                    <Field name={`${name}.fileHash`} component="textarea" />
                    <label>Value</label>
                    <Field name={`${name}.newOwner`} component="textarea" />
                    <span onClick={() => fields.remove(index)} style={{ cursor: 'pointer' }}>
                      ❌
                    </span>
                  </div>
                ))
              }
            </FieldArray>
            <h4>Gas price</h4>
            <Field name="gasPrice" component="input" type="number" />
            <h4>Gas limit</h4>
            <Field name="gasLimit" component="input" type="number" />

            <br />
            <br />
            <button type="submit">Transfer</button>
          </form>
        )}
      />
      <hr /> */}

      {/* <h2>Renew Files</h2>
      <Form
        initialValues={{
          filesRenew: [{
            fileHash: 'abcdef',
            renewTime: 100
          }],
          gasPrice: '500',
          gasLimit: '100000000'
        }}
        mutators={Object.assign({}, arrayMutators) as any}
        onSubmit={onRenewFiles}
        render={({
          form: {
            mutators: { push }
          },
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <h4>File Renews</h4>
            <button type="button" onClick={() => push('filesRenew', { fileHash: '', renewTime: '' })}>
              Add File Renew
            </button>
            <FieldArray name="filesRenew">
              {({ fields }) =>
                fields.map((name, index) => (
                  <div key={index}>
                    <label>File Hash Hex</label>
                    <Field name={`${name}.fileHash`} component="textarea" />
                    <label>Renew Time</label>
                    <Field name={`${name}.renewTime`} component="textarea" />
                    <span onClick={() => fields.remove(index)} style={{ cursor: 'pointer' }}>
                      ❌
                    </span>
                  </div>
                ))
              }
            </FieldArray>
            <h4>Gas price</h4>
            <Field name="gasPrice" component="input" type="number" />
            <h4>Gas limit</h4>
            <Field name="gasLimit" component="input" type="number" />

            <br />
            <br />
            <button type="submit">Transfer</button>
          </form>
        )}
      />
      <hr /> */}

      {/* <h2>File Read Pledge</h2>
      <Form
        initialValues={{
          fileHash: 'abcdef',
          readPlans: [{
            nodeAddr: 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns',
            maxReadBlockNum: 1000,
            haveReadBlockNum: 10
          }],
          gasPrice: '500',
          gasLimit: '100000000'
        }}
        mutators={Object.assign({}, arrayMutators) as any}
        onSubmit={onFileReadPledge}
        render={({
          form: {
            mutators: { push }
          },
          handleSubmit
        }) => (
          <form onSubmit={handleSubmit}>
            <h4>File Hash Hex</h4>
            <Field name="fileHash" component="textarea" />
            <h4>Read Plans</h4>
            <button type="button" onClick={
              () => push('readPlans', { nodeAddr: '', maxReadBlockNum: 1, haveReadBlockNum: 1 })
            }>
              Add Read Plan
            </button>
            <FieldArray name="readPlans">
              {({ fields }) =>
                fields.map((name, index) => (
                  <div key={index}>
                    <label>Node Address</label>
                    <Field name={`${name}.nodeAddr`} component="textarea" />
                    <label>Max Read Block Number</label>
                    <Field name={`${name}.maxReadBlockNum`}
                      component="input" type="number"  parse={(value) => Number(value)} />
                    <label>Have Read Block Number</label>
                    <Field name={`${name}.haveReadBlockNum`}
                      component="input" type="number"  parse={(value) => Number(value)} />
                    <span onClick={() => fields.remove(index)} style={{ cursor: 'pointer' }}>
                      ❌
                    </span>
                  </div>
                ))
              }
            </FieldArray>
            <h4>Gas price</h4>
            <Field name="gasPrice" component="input" type="number" />
            <h4>Gas limit</h4>
            <Field name="gasLimit" component="input" type="number" />

            <br />
            <br />
            <button type="submit">Submit</button>
          </form>
        )}
      />
      <hr /> */}

      {/* <h2>Cancel File Read</h2>
      <Form
        initialValues={{
          fileHash: 'abcdef',
          gasPrice: '500',
          gasLimit: '100000000'
        }}
        onSubmit={onCancelFileRead}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>File Hash Hex</label>
            <Field name="fileHash" component="textarea" />
            <h4>Gas price</h4>
            <Field name="gasPrice" component="input" type="number" />
            <h4>Gas limit</h4>
            <Field name="gasLimit" component="input" type="number" />

            <br />
            <br />
            <button type="submit">Cancel</button>
          </form>
        )}
      />
      <hr /> */}

      {/* <h2>Response</h2>
      <Form
        initialValues={{
          fileHash: 'abcdef',
          proveData: 'abcdef',
          blockHeight: 100,
          gasPrice: '500',
          gasLimit: '100000000'
        }}
        onSubmit={onResponse}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>File Hash Hex</label>
            <Field name="fileHash" component="textarea" />
            <label>Prove Data</label>
            <Field name="proveData" component="textarea" />
            <label>Block Height</label>
            <Field name="blockHeight" component="input" type="number"  parse={(value) => Number(value)}/>
            <h4>Gas price</h4>
            <Field name="gasPrice" component="input" type="number" />
            <h4>Gas limit</h4>
            <Field name="gasLimit" component="input" type="number" />

            <br />
            <br />
            <button type="submit">Response</button>
          </form>
        )}
      />
      <hr />

      <h2>Judge</h2>
      <Form
        initialValues={{
          fileHash: 'abcdef',
          nodeAddr: 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns',
          gasPrice: '500',
          gasLimit: '100000000'
        }}
        onSubmit={onJudge}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>File Hash Hex</label>
            <Field name="fileHash" component="textarea" />
            <label>Node Address</label>
            <Field name="nodeAddr" component="textarea" />
            <h4>Gas price</h4>
            <Field name="gasPrice" component="input" type="number" />
            <h4>Gas limit</h4>
            <Field name="gasLimit" component="input" type="number" />

            <br />
            <br />
            <button type="submit">Judge</button>
          </form>
        )}
      />
      <hr /> */}

      <h2>Generate File Read Settle Slice</h2>
      <Form
        initialValues={{
          fileHash: 'abcdef',
          payTo: 'AXCyYV4DNmmsqZn9qJEqHqpacVxcr7X7ns',
          sliceId: 100,
          pledgeHeight: 1000
        }}
        onSubmit={onGenFileReadSettleSlice}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <label>File Hash Hex</label>
            <Field name="fileHash" component="textarea" />
            <label>Pay To</label>
            <Field name="payTo" component="textarea" />
            <label>Slice ID</label>
            <Field name="sliceId" component="input" type="number"  parse={(value) => Number(value)}/>
            <label>Pledge Height</label>
            <Field name="pledgeHeight" component="input" type="number"  parse={(value) => Number(value)} />

            <br />
            <br />
            <button type="submit">Judge</button>
          </form>
        )}
      />
      <hr />

      <button onClick={onBack}>Back</button>
    </div>
  );
};
