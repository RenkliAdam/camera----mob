navigator.mediaDevices.getUserMedia({ video: true })
  .then(stream => {
    const peerConnection = new RTCPeerConnection();
    stream.getTracks().forEach(track => peerConnection.addTrack(track, stream));

    // Offer (teklif) oluşturma
    peerConnection.createOffer()
      .then(offer => {
        return peerConnection.setLocalDescription(offer);
      })
      .then(() => {
        // Offer mesajını konsola yazdırma
        console.log("Offer mesajı: ", peerConnection.localDescription);
      });
  })
  .catch(err => {
    console.error('Kamera hatası: ', err);
  });
